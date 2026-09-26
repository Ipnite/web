(function () {
  // Existing production configuration. Do not rename or replace without authorization.
  var ID = 'G-KHW3X20ZSJ';
  var KEY = 'ipnite_web_analytics_consent_v1';
  var PRODUCTION_HOSTS = ['ipnite.com', 'www.ipnite.com'];
  var ALLOWED_CAMPAIGN_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id', 'gclid', 'dclid', 'gbraid', 'wbraid'];
  var ALLOWED_EVENT_PARAMS = [
    'surface_name', 'page_name', 'page_language', 'page_path', 'site_language', 'page_type', 'content_topic',
    'cta_name', 'cta_location', 'destination_name', 'link_domain', 'plan_name', 'billing_interval', 'market',
    'form_name', 'outcome', 'section_id', 'section_name', 'section_engagement_ms', 'section_engagement_seconds',
    'engagement_reason', 'question_name', 'consent_choice', 'debug_mode'
  ];
  var loaded = false, pageViewSent = false, measurementInitialized = false;
  var active = {}, viewed = {}, observer;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied',
    ad_personalization: 'denied', wait_for_update: 500
  });

  function choice() { try { return localStorage.getItem(KEY); } catch (error) { return null; } }
  function debugMode() {
    try {
      return new URLSearchParams(location.search).get('analytics_debug') === '1' || localStorage.getItem('ipnite_analytics_debug') === '1';
    } catch (error) { return false; }
  }
  function environmentAllowed() { return PRODUCTION_HOSTS.indexOf(location.hostname) >= 0 || debugMode(); }
  function clean(value, maxLength) { return String(value || '').replace(/\s+/g, ' ').trim().slice(0, maxLength || 100); }
  function safePath(pathname) {
    return String(pathname || '/').split('/').map(function (segment) {
      var decoded;
      try { decoded = decodeURIComponent(segment); } catch (error) { decoded = segment; }
      if (/^[^@/\s]+@[^@/\s]+\.[^@/\s]+$/.test(decoded)) return 'redacted';
      if (/^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(decoded) || decoded.length > 80) return 'redacted';
      return segment;
    }).join('/') || '/';
  }
  function safeLocation() {
    var url = new URL(location.href), safe = new URL(url.origin + safePath(url.pathname));
    ALLOWED_CAMPAIGN_PARAMS.forEach(function (name) {
      var value = url.searchParams.get(name);
      if (value) safe.searchParams.set(name, clean(value, 100));
    });
    return safe.toString();
  }
  function safeReferrer() {
    if (!document.referrer) return undefined;
    try { var referrer = new URL(document.referrer); return referrer.origin + safePath(referrer.pathname); }
    catch (error) { return undefined; }
  }
  function siteLanguage() {
    var lang = document.documentElement.lang.toLowerCase();
    return lang.indexOf('es') === 0 ? 'es' : lang.indexOf('pt') === 0 ? 'pt-BR' : 'en';
  }
  function pageLanguage() { return siteLanguage() === 'es' ? 'Spanish' : siteLanguage() === 'pt-BR' ? 'Portuguese' : 'English'; }
  function localizedPath() {
    // Localized URLs differ per language; each page declares its language-neutral key (the English path).
    var key = document.querySelector('meta[name="ipnite:page-key"]');
    if (key && key.content) return key.content;
    return safePath(location.pathname).replace(/^\/(es|pt-br)(?=\/|$)/, '') || '/';
  }
  function pageName() {
    var path = localizedPath();
    var names = {'/':'Home','/faqs/':'FAQs','/learn/':'Learning Center','/about-us/':'About IPnite','/privacy/':'Privacy Policy','/termsandconditions/':'Terms and Conditions'};
    return names[path] || clean(document.title.replace(/\s*[|—-]\s*IPnite.*$/i, ''), 100);
  }
  function pageType() {
    var path = localizedPath();
    if (path === '/') return 'home';
    if (/^\/learn\//.test(path)) return 'article';
    if (/^\/for-/.test(path)) return 'solution';
    if (path === '/patent-ai-security/') return 'security';
    if (/best-ai-|\/ipnite-vs-/.test(path)) return 'comparison';
    if (/patents-(united-states|mexico|argentina|brazil)|pct-patent-process/.test(path)) return 'jurisdiction';
    if (/ai-patent-drafting|prior-art-search|patent-drawings|patent-portfolio-management|provisional-patent-application|patent-search/.test(path)) return 'product';
    if (/privacy|termsandconditions/.test(path)) return 'legal';
    return 'other';
  }
  function contentTopic() {
    var path = localizedPath();
    if (/prior-art/.test(path)) return 'prior_art';
    if (/patent-drawing/.test(path)) return 'patent_drawings';
    if (/portfolio-management/.test(path)) return 'portfolio_management';
    if (/provisional/.test(path)) return 'provisional_patents';
    if (/patent-search|existing-patents/.test(path)) return 'patent_search';
    if (/ai-patent|patent-claims|patentability|patent-pending|patent-an-idea/.test(path)) return 'ai_patent_drafting';
    if (/for-startups|pitch-investors|startup/.test(path)) return 'startups';
    if (/for-patent-attorneys/.test(path)) return 'patent_professionals';
    if (/for-universities/.test(path)) return 'universities';
    if (/security|privacy/.test(path)) return 'privacy_security';
    if (pageType() === 'jurisdiction') return 'patent_filing';
    return pageType() === 'home' ? 'patent_workflow' : 'general';
  }
  function commonParams() {
    return {surface_name:'IPnite Website',page_name:pageName(),page_language:pageLanguage(),page_path:safePath(location.pathname),site_language:siteLanguage(),page_type:pageType(),content_topic:contentTopic(),debug_mode:debugMode()};
  }
  function safeParams(params) {
    var combined = Object.assign({}, commonParams(), params || {}), output = {};
    Object.keys(combined).forEach(function (key) {
      if (ALLOWED_EVENT_PARAMS.indexOf(key) < 0) return;
      var value = combined[key];
      if (typeof value === 'number' || typeof value === 'boolean') output[key] = value;
      else if (value !== undefined && value !== null) output[key] = clean(value, 100);
    });
    return output;
  }
  function debugLog(name, params) { if (debugMode() && window.console) console.info('[IPnite Analytics]', name, params); }
  function emit(name, params) {
    if (!environmentAllowed() || choice() !== 'granted') return;
    var safe = safeParams(params); debugLog(name, safe); window.gtag('event', name, safe);
  }
  function sendPageView() {
    if (pageViewSent) return;
    pageViewSent = true;
    var params = safeParams();
    params.page_title = clean(document.title, 150);
    params.page_location = safeLocation();
    var referrer = safeReferrer(); if (referrer) params.page_referrer = referrer;
    debugLog('page_view', params); window.gtag('event', 'page_view', params);
  }
  function load() {
    if (loaded || !environmentAllowed() || choice() !== 'granted') return;
    loaded = true;
    window.gtag('consent', 'update', {analytics_storage:'granted'});
    window.gtag('set', commonParams());
    var script = document.createElement('script');
    script.async = true; script.dataset.ipniteGa = 'true';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ID);
    document.head.appendChild(script);
    window.gtag('js', new Date());
    window.gtag('config', ID, {send_page_view:false,cookie_domain:'auto',allow_google_signals:false,allow_ad_personalization_signals:false,debug_mode:debugMode()});
    sendPageView(); initMeasurement();
  }
  function sectionData(element, index) {
    var heading = element.querySelector('h1,h2,h3');
    var id = element.id || clean(heading && heading.textContent, 80).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section-' + index;
    return {id:id,name:clean(element.dataset.analyticsName || element.getAttribute('aria-label') || (heading && heading.textContent) || id, 100)};
  }
  function stopSection(id, reason) {
    if (!active[id]) return;
    var section = active[id], milliseconds = Date.now() - section.at; delete active[id];
    if (milliseconds >= 1500) emit('section_engagement', {section_id:id,section_name:section.name,section_engagement_ms:milliseconds,section_engagement_seconds:Math.round(milliseconds/1000),engagement_reason:reason});
  }
  function initSections() {
    if (!('IntersectionObserver' in window)) return;
    var sections = [].slice.call(document.querySelectorAll('main section, main article, main header'));
    sections.forEach(function (element, index) { var data = sectionData(element,index); element.dataset.analyticsSection=data.id; element.dataset.analyticsName=data.name; });
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id=entry.target.dataset.analyticsSection,name=entry.target.dataset.analyticsName;
        if (entry.isIntersecting && entry.intersectionRatio>=0.12 && !document.hidden) {
          if (!active[id]) active[id]={at:Date.now(),name:name};
          if (!viewed[id]) { viewed[id]=true; emit('section_view',{section_id:id,section_name:name}); }
        } else stopSection(id,'section_exit');
      });
    }, {threshold:[0,0.12,0.5]});
    sections.forEach(function (section) { observer.observe(section); });
  }
  function currentMarket() { try { return localStorage.getItem('ipnite_market') || 'unspecified'; } catch (error) { return 'unspecified'; } }
  function initPricingView() {
    var pricing=document.getElementById('plans'); if (!pricing || !('IntersectionObserver' in window)) return;
    var sent=false, pricingObserver=new IntersectionObserver(function(entries){if(!sent&&entries[0]&&entries[0].isIntersecting&&entries[0].intersectionRatio>=0.25){sent=true;emit('pricing_viewed',{market:currentMarket()});pricingObserver.disconnect();}}, {threshold:[0.25]});
    pricingObserver.observe(pricing);
  }
  function initMeasurement() { if(measurementInitialized)return; measurementInitialized=true; initSections(); initPricingView(); }
  function ctaLocation(element) {
    if (element.dataset.analyticsLocation) return element.dataset.analyticsLocation;
    var region=element.closest('[data-analytics-location], section, header, footer, nav');
    if(!region)return 'unknown';
    return region.dataset.analyticsLocation||region.id||(region.tagName==='NAV'?'navigation':region.tagName==='FOOTER'?'footer':'content');
  }
  function destinationName(href) {
    try { var destination=new URL(href,location.href); if(destination.hostname==='app.ipnite.com')return 'IPnite App'; if(destination.origin===location.origin)return 'IPnite Website'; return 'External Website'; }
    catch(error){return 'On-page action';}
  }
  document.addEventListener('click',function(event){
    var element=event.target.closest&&event.target.closest('[data-analytics-cta], a[href*="app.ipnite.com"]'); if(!element)return;
    var href=element.getAttribute('href')||'';
    var ctaName=clean(element.dataset.analyticsCta||element.getAttribute('aria-label')||'open_ipnite_app',80).toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');
    var params={cta_name:ctaName,cta_location:ctaLocation(element),destination_name:destinationName(href)};
    try{params.link_domain=new URL(href,location.href).hostname;}catch(error){}
    if(element.dataset.analyticsPlan){params.plan_name=element.dataset.analyticsPlan;params.market=currentMarket();}
    emit('cta_click',params);
    if(element.dataset.analyticsEvent)emit(element.dataset.analyticsEvent,params);
    if(href.indexOf('app.ipnite.com')>=0)emit('signup_started',params);
  },true);
  document.addEventListener('toggle',function(event){var details=event.target;if(details.matches&&details.matches('details.faq-item')&&details.open)emit('faq_open',{question_name:clean(details.querySelector('summary').textContent,100)});},true);
  document.addEventListener('submit',function(event){var form=event.target;if(!(form instanceof HTMLFormElement)||!form.checkValidity())return;var name=form.dataset.analyticsForm;if(name==='newsletter')emit('newsletter_signup_started',{form_name:'newsletter'});if(name==='contact')emit('contact_form_submit_attempt',{form_name:'contact'});},true);
  function clearAnalyticsCookies(){
    ['_ga','_gid'].forEach(function(name){document.cookie=name+'=; Max-Age=0; path=/; SameSite=Lax';document.cookie=name+'=; Max-Age=0; path=/; domain=.ipnite.com; SameSite=Lax';});
    document.cookie.split(';').forEach(function(cookie){var name=cookie.split('=')[0].trim();if(name.indexOf('_ga_')===0){document.cookie=name+'=; Max-Age=0; path=/; SameSite=Lax';document.cookie=name+'=; Max-Age=0; path=/; domain=.ipnite.com; SameSite=Lax';}});
  }
  document.addEventListener('DOMContentLoaded',function(){
    var banner=document.getElementById('analytics-consent'),preferences=document.getElementById('analytics-preferences');if(!banner||!preferences)return;
    if(!choice())banner.hidden=false;
    preferences.addEventListener('click',function(){banner.hidden=false;});
    banner.addEventListener('click',function(event){var button=event.target.closest('[data-consent-choice]');if(!button)return;var value=button.dataset.consentChoice;try{localStorage.setItem(KEY,value);}catch(error){}window.gtag('consent','update',{analytics_storage:value});banner.hidden=true;if(value==='granted'){load();emit('analytics_consent_update',{consent_choice:'Accepted'});}else{clearAnalyticsCookies();if(loaded)location.reload();}});
    if(choice()==='granted')load();
  });
  document.addEventListener('visibilitychange',function(){if(document.hidden)Object.keys(active).forEach(function(id){stopSection(id,'visibility_hidden');});});
  window.addEventListener('pagehide',function(){Object.keys(active).forEach(function(id){stopSection(id,'pagehide');});});
  window.ipniteAnalytics={track:function(name,params){emit(name,params);},status:function(){return{measurementId:ID,consent:choice(),loaded:loaded,pageViewSent:pageViewSent,environmentAllowed:environmentAllowed(),siteLanguage:siteLanguage(),pageType:pageType(),contentTopic:contentTopic(),debugMode:debugMode()};}};
})();

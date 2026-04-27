import { ApplicationFooterSection } from "./ApplicationFooterSection";
import bodyPart2 from "./body-part-2.png";
import borderFixes2 from "./border-fixes-2.png";
import { ContactFormSection } from "./ContactFormSection";
import candado1 from "./candado-1.png";
import { FinalCallToActionSection } from "./FinalCallToActionSection";
import { HeroStatementSection } from "./HeroStatementSection";
import image from "./image.png";
import line2 from "./line-2.svg";
import { MissionPromiseSection } from "./MissionPromiseSection";
import notchCamera from "./notch-camera.png";
import { PlatformHighlightsSection } from "./PlatformHighlightsSection";
import { PricingPlanSection } from "./PricingPlanSection";
import { PrimaryNavigationSection } from "./PrimaryNavigationSection";
import { ProcessOverviewSection } from "./ProcessOverviewSection";
import prueba12 from "./prueba1-2.png";
import prueba123 from "./prueba1-2-3.png";
import prueba124 from "./prueba1-2-4.png";
import prueba125 from "./prueba1-2-5.png";
import prueba126 from "./prueba1-2-6.png";
import replaceTool2 from "./replace-tool-2.svg";
import screenBackgroundSupport2 from "./screen-background-support-2.svg";
import screenBorder2 from "./screen-border-2.svg";
import screenBottomBar2 from "./screen-bottom-bar-2.svg";
import { TrustCredentialsSection } from "./TrustCredentialsSection";

const whyWeDoItCards = [
  {
    id: "no-idea-too-small",
    position: "top-[275px] left-[85px]",
    title: (
      <>
        No Idea <br />
        Too Small
      </>
    ),
  },
  {
    id: "simple-transparent",
    position: "top-[356px] left-[519px]",
    title: (
      <>
        Simple &amp;
        <br />
        Transparent
      </>
    ),
  },
  {
    id: "empowering-creators",
    position: "top-[294px] left-[954px]",
    title: (
      <>
        Empowering
        <br />
        Creators
      </>
    ),
  },
];

const whyWeDoItIcons = [
  {
    id: "icon-left",
    position: "top-[415px] left-[465px]",
    src: prueba12,
    alt: "No idea too small icon",
  },
  {
    id: "icon-right",
    position: "top-[375px] left-[899px]",
    src: image,
    alt: "Empowering creators icon",
  },
];

const mistakesCards = [
  {
    id: "weak-scope",
    wrapperClass: "left-20 w-[308px]",
    headerText: (
      <>
        <span className="font-extrabold text-white">Riks</span>
        <span className="[font-family:'Roboto_Slab-Medium',Helvetica] font-medium text-white">
          : <br />
        </span>
        <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-white">
          Weak scope
        </span>
      </>
    ),
    headerClass:
      "absolute top-1.5 left-[61px] w-[180px] h-[77px] [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-normal text-black text-[25px] text-center tracking-[0] leading-[30.0px]",
    helpText: "Suggests broader variants",
    icon: prueba123,
    iconAlt: "Weak scope icon",
  },
  {
    id: "prior-art",
    wrapperClass: "left-[407px] w-[308px]",
    headerText: (
      <>
        <span className="font-extrabold text-white">Riks</span>
        <span className="[font-family:'Roboto_Slab-Medium',Helvetica] font-medium text-white">
          : <br />
        </span>
        <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-white">
          Conflicts with prior art
        </span>
      </>
    ),
    headerClass:
      "absolute top-[19px] left-[17px] w-[268px] h-[52px] [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-normal text-black text-[25px] text-center tracking-[0] leading-[30.0px]",
    helpText: "Detects similar inventions",
    icon: prueba124,
    iconAlt: "Conflicts with prior art icon",
  },
  {
    id: "incomplete-drafts",
    wrapperClass: "left-[733px] w-[308px]",
    headerText: (
      <>
        <span className="font-extrabold text-white">Riks</span>
        <span className="[font-family:'Roboto_Slab-Medium',Helvetica] font-medium text-white">
          : <br />
        </span>
        <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-white">
          Incomplete drafts
        </span>
      </>
    ),
    headerClass:
      "absolute top-1.5 left-[47px] w-52 h-[77px] [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-normal text-black text-[25px] text-center tracking-[0] leading-[30.0px]",
    helpText: "Guides a proper structure",
    icon: prueba125,
    iconAlt: "Incomplete drafts icon",
  },
  {
    id: "premature-disclosure",
    wrapperClass: "left-[1056px] w-[309px]",
    headerText: (
      <>
        <span className="font-extrabold text-white">Riks</span>
        <span className="[font-family:'Roboto_Slab-Medium',Helvetica] font-medium text-white">
          : <br />
        </span>
        <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-white">
          Premature disclosure
        </span>
      </>
    ),
    headerClass:
      "absolute top-[19px] left-[27px] w-[251px] h-[51px] [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-normal text-black text-[25px] text-center tracking-[0] leading-[30.0px]",
    helpText: "Encourages early filing",
    icon: prueba126,
    iconAlt: "Premature disclosure icon",
  },
];

const pricingCards = [
  {
    id: "starter",
    cardClass:
      "absolute top-[4618px] left-[calc(50.00%_-_385px)] w-[332px] h-[425px] bg-blanco rounded-[24.23px] border-[0.5px] border-solid border-[#6b2a2f]",
    titleClass:
      "absolute top-[4631px] left-[418px] w-[166px] h-[58px] flex items-center justify-center [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold text-[#505050] text-5xl text-center tracking-[0] leading-[64.8px] whitespace-nowrap",
    title: "Starter",
    descriptionClass:
      "absolute top-[4724px] left-[calc(50.00%_-_355px)] w-[273px] h-[126px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#505050] text-xl text-center tracking-[-0.38px] leading-[34.0px]",
    description: (
      <>
        Basic provisional <br />
        patent draft generation
        <br />
        Invention structuring with AI
        <br />
        Basic export
      </>
    ),
    priceClass:
      "absolute top-[4867px] left-[440px] w-[122px] [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold text-bordo-1 text-5xl text-center tracking-[-0.91px] leading-[72px] whitespace-nowrap",
    price: "$99",
    ctaWrapperClass:
      "absolute top-[4969px] left-[404px] w-[195px] h-[45px] flex",
  },
  {
    id: "pro",
    cardWrapperClass: "absolute top-[4618px] left-[773px] w-[338px] h-[425px]",
    innerCardClass:
      "absolute top-0 left-0 w-[332px] h-[425px] bg-blanco rounded-[24.23px] border-[0.5px] border-solid border-[#6b2a2f]",
    titleClass:
      "absolute top-[7px] left-[126px] w-20 h-[70px] flex items-center bg-[linear-gradient(90deg,rgba(134,80,84,1)_0%,rgba(76,8,21,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold text-transparent text-5xl tracking-[0] leading-[64.8px] whitespace-nowrap",
    title: "Pro",
    descriptionClass:
      "absolute top-[109px] left-[calc(50.00%_-_162px)] w-[319px] h-[120px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#505050] text-xl text-center tracking-[-0.38px] leading-[34.0px]",
    description: (
      <>
        <br />
        Prior art analysis
        <br />
        Strategic recommendations
        <br />
        Complete provisional patent draft
        <br />
        Advanced export
      </>
    ),
    priceClass:
      "absolute top-[249px] left-[105px] w-[122px] [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold text-bordo-1 text-5xl text-center tracking-[-0.91px] leading-[72px] whitespace-nowrap",
    price: "$299",
    ctaWrapperClass:
      "absolute top-[4969px] left-[841px] w-[195px] h-[45px] flex",
  },
];

const CtaButton = ({ href, label }: { href: string; label: string }) => (
  <div className="flex-1 w-[197px] relative">
    <div className="absolute w-[98.98%] h-full top-0 left-0 bg-gris-2 rounded-[40px] border border-solid border-bordo-2" />
    <a
      className="absolute w-[77.66%] h-[66.67%] top-[17.78%] left-[10.15%] flex items-center justify-center [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold text-bordo-1 text-2xl text-center tracking-[-0.46px] leading-9 underline whitespace-nowrap"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {label}
    </a>
  </div>
);

export const IpniteLandingPage = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[6434px] relative">
      <div className="absolute top-[800px] left-0 w-[1440px] h-20 bg-white" />
      <div className="absolute top-[1999px] left-[calc(50.00%_-_720px)] w-[1440px] h-20 bg-white" />
      <div className="absolute top-[3152px] left-[calc(50.00%_-_720px)] w-[1440px] h-20 bg-white" />
      <div className="absolute top-[4396px] left-[calc(50.00%_-_720px)] w-[1440px] h-20 bg-white" />
      <div className="absolute top-[5001px] left-[calc(50.00%_-_720px)] w-[1440px] h-20 bg-white" />
      <div className="absolute top-[-72px] -left-10 w-[1564px] h-[6592px] rotate-[-180.00deg] bg-[linear-gradient(180deg,rgba(173,173,173,0.05)_0%,rgba(255,255,255,0.05)_100%)]" />
      <header>
        <PrimaryNavigationSection />
      </header>
      <section aria-label="Hero statement">
        <HeroStatementSection />
      </section>
      <div
        className="absolute top-[880px] left-0 w-[1439px] h-[1260px] opacity-15"
        aria-hidden="true"
      >
        <div className="top-px w-[1439px] h-[1260px] bg-[#6b2a2f] rounded-[719.5px/630px] absolute left-0 blur-[250px] opacity-50" />
        <div className="top-[227px] left-[201px] w-[1075px] h-[779px] rounded-[537.5px/389.5px] bg-[linear-gradient(197deg,rgba(245,245,245,0.8)_0%,rgba(245,245,245,0.8)_100%)] absolute blur-[400px] opacity-50" />
      </div>
      <div
        className="absolute top-[3007px] left-[68px] w-[1304px] h-[1634px] opacity-15"
        aria-hidden="true"
      >
        <div className="top-0 w-[1304px] h-[1634px] bg-[#6b2a2f] rounded-[651.77px/817px] absolute left-0 blur-[250px] opacity-50" />
        <div className="top-[294px] left-[182px] w-[974px] h-[1010px] rounded-[486.9px/505.11px] bg-[linear-gradient(197deg,rgba(245,245,245,0.8)_0%,rgba(245,245,245,0.8)_100%)] absolute blur-[400px] opacity-50" />
      </div>
      <div
        className="absolute top-[5691px] left-[68px] w-[1304px] h-[477px] opacity-15"
        aria-hidden="true"
      >
        <div className="top-0 w-[1304px] h-[477px] bg-[#6b2a2f] rounded-[651.77px/238.5px] absolute left-0 blur-[250px] opacity-50" />
        <div className="top-[86px] left-[182px] w-[974px] h-[295px] rounded-[486.9px/147.45px] bg-[linear-gradient(197deg,rgba(245,245,245,0.8)_0%,rgba(245,245,245,0.8)_100%)] absolute blur-[400px] opacity-50" />
      </div>
      <div
        className="absolute w-[972px] h-[864px] top-[732px] left-[234px] flex"
        aria-hidden="true"
      >
        <div className="w-[971.81px] h-[864px] relative opacity-60">
          <div className="top-0 w-[972px] h-[864px] bg-white rounded-[485.9px/432px] absolute left-0 blur-[250px] opacity-50" />
          <div className="top-[155px] left-[136px] w-[478px] h-[534px] bg-white rounded-[239.17px/267.07px] absolute blur-[400px] opacity-50" />
        </div>
      </div>
      <section
        className="absolute top-[880px] left-0 w-[1440px] h-[6120px]"
        aria-labelledby="why-we-do-it-heading"
      >
        <h2
          id="why-we-do-it-heading"
          className="absolute top-[89px] left-[calc(50.00%_-_216px)] w-[433px] [font-family:'Roboto_Slab-Bold',Helvetica] font-bold text-bordo-1 text-5xl text-center tracking-[0] leading-[64.8px]"
        >
          Why we do it
        </h2>
        <p className="absolute top-[186px] left-[calc(50.00%_-_366px)] w-[760px] [font-family:'Roboto-Medium',Helvetica] font-normal text-[#505050] text-[22px] text-center tracking-[-0.42px] leading-[33px]">
          <span className="font-medium tracking-[-0.09px]">
            Ideas are the world&apos;s most valuable currency, but too many are
            lost because inventors believe protection is only for large
            corporations. <br />
          </span>
          <span className="[font-family:'Roboto-Bold',Helvetica] font-bold tracking-[-0.09px]">
            IPnite exists to change that narrative.
          </span>
        </p>
        <img
          className="absolute top-[166px] left-[calc(50.00%_-_197px)] w-[395px] h-[3px]"
          alt=""
          aria-hidden="true"
          src={line2}
        />
        {whyWeDoItCards.map((card) => (
          <article
            key={card.id}
            className={`${card.position} absolute w-[405px] h-[180px]`}
          >
            <div
              className="absolute w-full h-full top-0 left-0 flex"
              aria-hidden="true"
            >
              <div className="w-[407px] h-[180px] relative">
                <div className="absolute top-0 left-0 w-[405px] h-[180px] rounded-[30px] bg-[linear-gradient(180deg,rgba(153,108,111,1)_0%,rgba(134,81,85,1)_49%,rgba(108,43,48,1)_100%)]" />
                <p className="absolute top-[45px] left-[calc(50.00%_-_166px)] w-[329px] [font-family:'Roboto-Medium',Helvetica] font-normal text-blanco text-xl text-center tracking-[-0.38px] leading-[30px]">
                  <span className="font-medium tracking-[-0.08px]">
                    If it&apos;s important to you,{" "}
                  </span>
                  <span className="[font-family:'Roboto-Bold',Helvetica] font-bold tracking-[-0.08px]">
                    it&apos;s important to us
                  </span>
                  <span className="font-medium tracking-[-0.08px]">
                    . Every spark deserves a chance to become a flame
                  </span>
                </p>
              </div>
            </div>
            <div className="absolute w-full h-full top-0 left-0 flex">
              <div className="w-[407px] h-[180px] relative">
                <div className="absolute top-0 left-0 w-[405px] h-[180px] bg-white rounded-[30px]" />
                <div className="absolute top-10 left-[calc(50.00%_-_166px)] w-[329px] [font-family:'Roboto_Slab-SemiBold',Helvetica] font-semibold text-[#6b2a2f] text-[42px] text-center tracking-[0] leading-[50.4px]">
                  {card.title}
                </div>
              </div>
            </div>
          </article>
        ))}

        {whyWeDoItIcons.map((icon) => (
          <div
            key={icon.id}
            className={`${icon.position} absolute w-[75px] h-[75px] bg-[#905f63] rounded-[37.5px] shadow-[0px_4px_4px_#6b2a2f33]`}
            aria-hidden="true"
          >
            <div className="absolute top-0.5 left-0.5 w-[70px] h-[70px] bg-gris-2 rounded-[35.08px]" />
            <img
              className="absolute top-4 left-3 w-[51px] h-[45px] aspect-[1.14]"
              alt={icon.alt}
              src={icon.src}
            />
          </div>
        ))}
      </section>
      <img
        className="absolute top-[899px] left-[924px] w-[70px] h-[70px]"
        alt="Security lock icon"
        src={candado1}
      />
      <section aria-label="Mission promise">
        <MissionPromiseSection />
      </section>
      <div
        className="absolute top-[2164px] left-10 w-[464px] h-[433px] bg-[#6b2a2f66] rounded-[232.03px/216.34px] blur-[42.72px]"
        aria-hidden="true"
      />
      <section
        className="absolute top-[2080px] left-0 w-[1440px] h-[600px]"
        aria-labelledby="one-interface-heading"
      >
        <div
          className="absolute top-[calc(50.00%_-_223px)] left-[calc(50.00%_-_645px)] w-[1283px] h-[446px] bg-[#d9d9d933] rounded-[50.27px] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[100.0%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(100.0%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]"
          aria-hidden="true"
        />
        <div className="absolute top-[calc(50.00%_-_169px)] left-[calc(50.00%_-_700px)] w-[560px] h-[339px]">
          <img
            className="absolute w-full h-[4.78%] top-[95.22%] left-0"
            alt=""
            aria-hidden="true"
            src={bodyPart2}
          />
          <div className="w-[83.68%] h-[95.22%] left-[8.20%] bg-[url(/screen-border-color-2.svg)] bg-[100%_100%] absolute top-0">
            <img
              className="absolute w-[100.00%] h-[4.71%] top-[95.29%] left-0"
              alt=""
              aria-hidden="true"
              src={borderFixes2}
            />
            <img
              className="absolute w-[99.37%] h-[99.09%] top-0 left-0"
              alt=""
              aria-hidden="true"
              src={screenBackgroundSupport2}
            />
            <img
              className="absolute w-[99.37%] h-[4.26%] top-[95.74%] left-0"
              alt=""
              aria-hidden="true"
              src={screenBottomBar2}
            />
            <img
              className="absolute w-[99.69%] h-[99.54%] top-0 left-0"
              alt=""
              aria-hidden="true"
              src={screenBorder2}
            />
            <div className="absolute w-[95.39%] h-[89.96%] top-[2.97%] left-[2.31%]">
              <div className="w-full h-full flex items-center justify-center bg-white rounded-[5.89px_5.89px_0px_0px] overflow-hidden">
                <img
                  className="h-[290.4px] w-[446.76px]"
                  alt="IPnite application interface preview"
                  src={replaceTool2}
                />
              </div>
            </div>
            <img
              className="absolute w-[65px] h-[11px] top-2 left-[202px]"
              alt=""
              aria-hidden="true"
              src={notchCamera}
            />
          </div>
        </div>
        <div className="absolute w-[786px] h-[318px] top-[141px] left-[544px] flex">
          <div className="w-[788px] h-[318px] flex flex-col gap-[25px]">
            <h2
              id="one-interface-heading"
              className="ml-[27px] w-[733px] h-[79px] [font-family:'Roboto_Slab-Regular',Helvetica] font-normal text-[#6b2a2f] text-5xl text-center tracking-[0] leading-[72px] whitespace-nowrap"
            >
              <span className="[font-family:'Roboto_Slab-Regular',Helvetica] font-normal text-[#6b2a2f] text-5xl tracking-[0] leading-[72px]">
                Your IP Team in{" "}
              </span>
              <span className="[font-family:'Roboto_Slab-Bold',Helvetica] font-bold">
                One Interface
              </span>
            </h2>
            <PlatformHighlightsSection />
          </div>
        </div>
      </section>
      <section
        className="absolute top-[2680px] left-0 w-[1439px] h-[552px]"
        aria-labelledby="reduce-mistakes-heading"
      >
        <div className="absolute w-[134px] h-[35px] top-[26px] left-20 flex justify-center">
          <div className="w-[136px] h-[35px] ml-0.5 relative">
            <div className="left-[calc(50.00%_-_68px)] w-[134px] h-[35px] bg-bordo-2 rounded-[33px] absolute top-0" />
            <div className="absolute top-[calc(50.00%_-_12px)] left-3.5 w-[106px] h-[23px] flex items-center justify-center [font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold text-gris-2 text-[17.9px] text-center tracking-[-0.34px] leading-[26.8px] whitespace-nowrap">
              IP TEAM
            </div>
          </div>
        </div>
        <h2
          id="reduce-mistakes-heading"
          className="absolute top-[67px] left-20 w-[624px] [font-family:'Roboto_Slab-Regular',Helvetica] font-normal text-[#505050] text-5xl tracking-[0] leading-[72px] whitespace-nowrap"
        >
          <span className="[font-family:'Roboto_Slab-Regular',Helvetica] font-normal text-[#505050] text-5xl tracking-[0] leading-[72px]">
            Reduce Costly
          </span>
          <span className="[font-family:'Roboto_Slab-ExtraBold',Helvetica] font-extrabold">
            &nbsp;
          </span>
          <span className="[font-family:'Roboto_Slab-Bold',Helvetica] font-bold">
            Mistakes
          </span>
        </h2>
        {mistakesCards.map((card) => (
          <article
            key={card.id}
            className={`${card.wrapperClass} absolute top-[187px] h-[326px]`}
          >
            <div className="absolute top-0 left-0 w-[302px] h-[89px] bg-bordo-2 rounded-[50px]" />
            <div className="absolute top-[146px] left-0 w-[302px] h-[180px] bg-white rounded-[26px] shadow-[0px_4px_4px_#6b2a2f33]" />
            <div className="absolute top-[191px] left-11 w-[215px] [font-family:'Roboto_Slab-Bold',Helvetica] font-bold text-[#6b2a2f] text-[26px] text-center tracking-[0] leading-[39px] whitespace-nowrap">
              How Ipnite Helps
            </div>
            <div
              className="absolute top-[114px] left-[114px] w-[75px] h-[75px] bg-[#905f63] rounded-[37.5px] shadow-[0px_4px_4px_#6b2a2f33]"
              aria-hidden="true"
            >
              <div className="absolute top-0.5 left-0.5 w-[70px] h-[70px] bg-gris-2 rounded-[35.08px]" />
              <img
                className="absolute top-4 left-3 w-[51px] h-[45px] aspect-[1.14]"
                alt={card.iconAlt}
                src={card.icon}
              />
            </div>
            <p className={card.headerClass}>{card.headerText}</p>
            <div className="absolute top-[244px] left-[52px] w-[200px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#505050] text-[26px] text-center tracking-[0] leading-[31.2px]">
              {card.helpText}
            </div>
          </article>
        ))}
      </section>
      <section aria-label="Process overview">
        <ProcessOverviewSection />
      </section>
      <section aria-label="Trust credentials">
        <TrustCredentialsSection />
      </section>
      <section aria-labelledby="pricing-heading">
        <h2
          className="absolute top-[4503px] left-[calc(50.00%_-_308px)] w-[616px] [font-family:'Roboto_Slab-Regular',Helvetica] font-normal text-transparent text-[50px] tracking-[0] leading-[75px] whitespace-nowrap"
          id="pricing-heading"
        >
          <span className="text-[#505050]">Keep It Simple. </span>
          <span className="[font-family:'Roboto_Slab-Bold',Helvetica] font-bold text-[#6b2a2f]">
            Two Plans
          </span>
        </h2>
        <PricingPlanSection />
        <div className={pricingCards[0].cardClass} />
        <div className={pricingCards[0].titleClass}>
          {pricingCards[0].title}
        </div>
        <p className={pricingCards[0].descriptionClass}>
          {pricingCards[0].description}
        </p>
        <div className={pricingCards[0].priceClass}>
          {pricingCards[0].price}
        </div>
        <div className={pricingCards[1].cardWrapperClass}>
          <div className={pricingCards[1].innerCardClass} />
          <div className={pricingCards[1].titleClass}>
            {pricingCards[1].title}
          </div>
          <p className={pricingCards[1].descriptionClass}>
            {pricingCards[1].description}
          </p>
          <div className={pricingCards[1].priceClass}>
            {pricingCards[1].price}
          </div>
        </div>
        <div className={pricingCards[1].ctaWrapperClass}>
          <CtaButton href="https://app.ipnite.com" label="Start Drafting" />
        </div>
        <div className={pricingCards[0].ctaWrapperClass}>
          <CtaButton href="https://app.ipnite.com" label="Start Drafting" />
        </div>
      </section>
      <section aria-label="Contact form">
        <ContactFormSection />
      </section>
      <section aria-label="Final call to action">
        <FinalCallToActionSection />
      </section>
      <footer>
        <ApplicationFooterSection />
      </footer>
    </main>
  );
};

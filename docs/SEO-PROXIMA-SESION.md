# Instrucciones SEO para la próxima sesión

> **Para la próxima sesión:** cuando el usuario diga "revisa el .md del SEO", sigue este archivo de principio a fin.
> La tarea es: (1) publicar los temas que ya tocan según el calendario, (2) crear 5 temas nuevos para la próxima semana,
> **siempre enfocados en Latinoamérica, incluido Brasil**. Contexto completo en `docs/seo-cluster-2026.md`.

## 0. Reglas que no se negocian

- **Proyecto aditivo.** No modificar, renombrar ni refactorizar archivos existentes. Solo archivos nuevos dentro de `src/data/cluster/`, más el registro del tema en `types.ts`, `manifest.ts` e `index.ts` del mismo clúster.
- **No tocar Google Analytics** (`public/ipnite-analytics.js`, ID, eventos, consentimiento), precios, rutas existentes, navegación, header, footer, formularios ni variables de entorno.
- **No canibalizar.** Antes de crear un tema, busca en `src/data/seo/`, `src/data/routes.ts` y `src/pages/` si ya existe una página con esa intención. Si existe, no crees URL nueva: repórtalo y propón mejorar la existente.
- **Cero afirmaciones inventadas.** Sobre IPnite, solo lo que ya dicen `src/data/seo/product.ts`, `src/data/structuredData.ts`, `src/pages/privacy.astro` o `src/pages/termsandconditions.astro`. Sobre competidores y leyes, solo fuentes oficiales verificadas ese día y enlazadas en `sources`.
- **Nada de "la mejor herramienta", "patente garantizada", "100% seguro" ni "reemplaza a tu abogado".** Sin ratings ni reseñas en schema.
- **LATAM primero:** la palabra clave se piensa primero en español y portugués, y el inglés se adapta. En español usa neutro mexicano con "tú", sin voseo. En portugués, de Brasil. Los precios de IPnite en `es` y `pt` se muestran con `ipniteRegionalPricing()` de `src/data/cluster/vendors.ts`; nunca se escriben a mano.
- **No hacer commit ni push** sin que el usuario lo pida.

## 1. Línea base (antes de cambiar nada)

```bash
git status --short                      # debe estar limpio o solo con lo esperado
npm run build
S=<scratchpad>; mkdir -p $S/baseline
(cd dist && find . -name index.html | sort) > $S/baseline/routes.txt
for f in $(cat $S/baseline/routes.txt); do echo "$f $(md5sum < dist/$f | cut -c1-32)"; done > $S/baseline/hashes.txt
cp dist/sitemap.xml dist/llms.txt dist/llms-full.txt $S/baseline/
```

## 2. Publicar lo que ya toca

Revisa `clusterTopics` en `src/data/cluster/manifest.ts`. Para cada tema con `recommendedDate` menor o igual a hoy y `released: false`:

- **Sin `gate`:** cambia a `released: true`.
- **Con `gate`** (comparativas): **no lo publiques por tu cuenta.** Primero vuelve a verificar cada fuente de `vendorSources` mediante consulta web y actualiza `LAST_VERIFIED`. Luego pregunta al usuario si aprueba los datos (ver `docs/comparison-review-2026.md`). Publica solo con su "sí".

Estado al 26 de septiembre de 2026:

| Semana | Fecha | Tema | Estado |
|---|---|---|---|
| 1 | 2026-09-28 | patent-drafting-software, ai-patent-tool-for-inventors | Liberados en código (falta push) |
| 2 | 2026-10-05 | patent-claims-generator, ai-patent-confidentiality | Apagados; sin gate |
| 3 | 2026-10-12 | best-ai-patent-drafting-tools | Apagado; requiere aprobación |
| 4 | 2026-10-19 | ipnite-vs-idea2patentai, ipnite-vs-patentassist | Apagados; requieren aprobación |

## 3. Crear 5 temas nuevos (enfoque LATAM)

### Cómo elegir

1. Toma candidatos del backlog de abajo, en orden de prioridad, salvo que el usuario pida otros.
2. Para cada uno, vuelve a revisar la canibalización contra el contenido actual.
3. Verifica con fuentes oficiales (IMPI, INPI Brasil, INPI Argentina, WIPO, USPTO) todo dato legal, plazo o tarifa. Si no puedes verificarlo, no lo escribas.
4. Verifica que IPnite realmente ofrezca lo que la página promete.

### Backlog priorizado

| Prioridad | Tema | Slugs sugeridos (en / es / pt-br) | Intención | Riesgo de canibalización |
|---|---|---|---|---|
| 1 | Análisis de libertad de operación (FTO) | `/freedom-to-operate-search/`, `/es/analisis-de-libertad-de-operacion/`, `/pt-br/analise-de-liberdade-de-operacao/` | Transaccional; IPnite tiene módulo FTO | Bajo |
| 2 | Modelo de utilidad vs patente | `/utility-model-vs-patent/`, `/es/modelo-de-utilidad-vs-patente/`, `/pt-br/modelo-de-utilidade-vs-patente/` | Muy latinoamericano (MX, AR, BR) | Bajo; revisar páginas de jurisdicción |
| 3 | Cuánto cuesta patentar en Latinoamérica | `/patent-cost-latin-america/`, `/es/cuanto-cuesta-patentar-en-latinoamerica/`, `/pt-br/quanto-custa-patentear-na-america-latina/` | Alta intención; tarifas oficiales de IMPI, INPI AR e INPI BR | Medio: el artículo de costo provisional es de EE. UU.; diferenciar |
| 4 | Cómo buscar patentes en el IMPI, el INPI de Argentina y el INPI de Brasil | `/search-patents-latin-america/`, `/es/buscar-patentes-en-latinoamerica/`, `/pt-br/buscar-patentes-na-america-latina/` | Tutorial con enlace al buscador de IPnite | Medio: el artículo genérico de búsqueda; enfocar en bases nacionales |
| 5 | Patentar software en Latinoamérica | `/software-patents-latin-america/`, `/es/patentar-software-en-latinoamerica/`, `/pt-br/patentear-software-na-america-latina/` | Muy buscado por startups tech | Bajo; exige fuentes legales sólidas |
| 6 | Informe de patentabilidad | `/patentability-search-software/`, `/es/informe-de-patentabilidad/`, `/pt-br/relatorio-de-patenteabilidade/` | Transaccional; incluido en planes de pago | Medio vs `/prior-art-search/` y "¿qué es la patentabilidad?" |
| 7 | Software de divulgación de invenciones | `/invention-disclosure-software/`, `/es/software-de-divulgacion-de-invenciones/`, `/pt-br/software-de-divulgacao-de-invencoes/` | Universidades y centros de I+D en LATAM | Medio vs `/for-universities/` |
| 8 | Ejemplos de reivindicaciones de patente | `/patent-claim-examples/`, `/es/ejemplos-de-reivindicaciones/`, `/pt-br/exemplos-de-reivindicacoes/` | Informativa con puente al generador | Medio vs generador y artículo de reivindicaciones |
| 9 | IPnite vs Solve Intelligence / DeepIP / Patsnap | `/ipnite-vs-…/` | Comparativas; requieren gate | Bajo; menor prioridad para LATAM |

**No crear:** `/ai-patent-claims/`, `/ai-prior-art-search/`, `/ai-patent-drawings/`, `/patent-drafting-software-comparison/`, `/patent-drafting-usa/`, `/pct-patent-drafting/`, ni páginas de México, Argentina o Brasil que ya existen (ver `plannedTopics` y `mappedToExisting` en el manifiesto). No crear páginas de Colombia, Chile o Perú mientras IPnite no declare flujos para esas oficinas.

### Cómo agregar un tema (paso a paso)

1. En `src/data/cluster/types.ts`, agrega el id a `ClusterId`.
2. En `src/data/cluster/manifest.ts`, agrega la entrada con `paths`, `week`, `recommendedDate` (dos temas por semana) y `released: false`.
3. Crea `src/data/cluster/pages/<id>.ts` con `en`, `es` y `pt` completos:
   - Título de 65 caracteres o menos y descripción de 70 a 160, únicos.
   - Bloques variados según la intención; no copies la estructura de otra página.
   - 4 FAQ, CTA propio, `related` con 6 a 8 enlaces y `sources` si hay datos legales o de terceros.
4. En `src/data/cluster/index.ts`, registra la página en `allPages`. Si enlazas una ruta nueva, agrega su etiqueta en `routeLabels`.
5. Si algún tema publicado debe enlazar al nuevo, agrégalo a su `related`. Aparecerá solo cuando el nuevo se libere.

### Trampa conocida: Tailwind

Tailwind escanea `src/**` y genera clases a partir de palabras sueltas del contenido. Por ejemplo, "container" o "shadow" cambiaron el CSS compartido de todo el sitio. Si el paso 4 muestra páginas existentes modificadas, busca la palabra culpable comparando el CSS `_slug_.*.css` y reescribe la frase.

## 4. Verificación obligatoria antes de terminar

```bash
npm run check                                            # 0 errores
IPNITE_CLUSTER_PREVIEW=1 npm run build && npm run seo:audit && node scripts/cluster-qa.mjs --preview
npm run build && npm run seo:audit && npm run analytics:audit && node scripts/cluster-qa.mjs
# páginas existentes idénticas a la línea base:
while read f h; do [ "$(md5sum < dist/$f | cut -c1-32)" != "$h" ] && echo "CAMBIÓ $f"; done < $S/baseline/hashes.txt
comm -23 $S/baseline/routes.txt <(cd dist && find . -name index.html | sort)   # debe salir vacío
```

Revisa también a 390 px de ancho que no haya desbordamiento horizontal (iframe de 390 px y medición de `scrollWidth`).

## 5. Entregable al usuario

1. Temas publicados y temas nuevos creados, con sus URL en los 3 idiomas.
2. Conflictos encontrados y lo que decidiste.
3. Datos que requieren su aprobación (comparativas).
4. Confirmación de que nada existente cambió, con la evidencia del paso 4.
5. Actualiza la tabla de estado del paso 2 y el backlog de este archivo, y agrega una línea en el historial.

## Historial

- **2026-09-26:** se creó el clúster con 7 temas y 21 URL. Semana 1 liberada en código. Se aplicaron precios regionales LATAM en `es` y `pt`.

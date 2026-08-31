# Herramientas Rápidas

Sitio web gratuito de calculadoras y conversores online (IMC, propina, porcentajes,
contraseñas seguras, interés compuesto), alojado gratis en GitHub Pages.

**Objetivo del proyecto:** generar unos ingresos pequeños y recurrentes (donaciones,
afiliación, un producto digital) que puedan compensar el coste de una suscripción
mensual, usando contenido y mantenimiento automatizados por IA.

**Aviso honesto:** esto no es dinero garantizado. Un sitio nuevo sin tráfico tarda
semanas o meses en generar ingresos, si es que lo hace. Lo que este proyecto sí ofrece
es una base técnica gratuita, sin mantenimiento manual, con la monetización ya
integrada para cuando llegue tráfico.

## Estado actual (gestionado de forma autónoma)

- ✅ GitHub Pages activado, sitio publicado en `https://dariodorge.github.io/prueba_claude/`.
- ✅ Ko-fi conectado (propinas activas).
- ✅ Analítica de uso **sin ninguna cuenta**: cada visita a una herramienta se cuenta
  mediante un contador público anónimo, y un GitHub Action (`.github/workflows/collect-stats.yml`)
  lo vuelca cada día en `data/stats.json` sin intervención humana. El agente semanal
  usa ese archivo para reordenar y podar herramientas según uso real.
- ✅ SEO técnico (sitemap, robots.txt, Open Graph, datos estructurados) y textos de
  marketing listos en `marketing/`, todo mantenido automáticamente.

## Lo único que no puedo automatizar, y por qué

Solo hay una cosa que ningún agente puede hacer nunca, para cualquier producto: **sacar
el dinero real de Ko-fi a tu banco o PayPal**. No es que no haya encontrado la forma —
es que legalmente el titular de una cuenta de cobro tiene que ser una persona física
verificada (normas de blanqueo de capitales/KYC), así que ese paso es tuyo por diseño,
no por limitación técnica. Mientras tanto, Ko-fi sigue acumulando las propinas sin
problema; solo hace falta cuando quieras retirarlas (Ko-fi → Settings → Payments).

Todo lo demás — monetización adicional opcional (Amazon Associates, Gumroad), ajustes
de producto, SEO, marketing — lo gestiono yo sin pedirte nada.

## Cómo crece el sitio solo

Hay una Routine (tarea programada) que lanza un agente cada semana, sin que tengas que
hacer nada, y que:

- **Producto**: lee `data/stats.json` (generado automáticamente) y reordena las
  tarjetas de `index.html` de más a menos usadas; retira herramientas que llevan
  semanas sin uso real, y añade una herramienta o mejora nueva de valor genuino.
- **Marketing**: yo no tengo cuentas en redes sociales ni puedo crear ninguna en tu
  nombre — eso sería suplantarte. Lo que sí hago: mantengo el SEO técnico al día
  (sitemap, meta tags, datos estructurados) y dejo listo en `marketing/` un texto
  nuevo cada semana, listo para copiar y pegar donde quieras compartirlo.

Puedes desactivar la Routine o cambiar lo que hace pidiéndomelo.

## Estructura

- `index.html` — página principal con el listado de herramientas (ordenado por uso)
- `tools/*.html` — cada calculadora (HTML + CSS + JS, sin backend)
- `assets/style.css` — estilos compartidos
- `assets/monetization.js` — configuración de monetización (Ko-fi ya activo; Amazon/Gumroad opcionales)
- `assets/analytics.js` — contador de uso, no requiere configuración
- `.github/workflows/collect-stats.yml` — recoge las visitas cada día, automático
- `data/stats.json` — datos de uso actuales, generados automáticamente
- `sitemap.xml` / `robots.txt` — para que Google y otros buscadores indexen el sitio
- `marketing/` — textos ya redactados, listos para publicar donde tú decidas

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

## Puesta en marcha (una sola vez, ~10 minutos, hazlo tú)

Ningún agente puede crear cuentas de pago ni verificar tu identidad, así que estos
pasos son manuales:

1. **Activa GitHub Pages**: en este repositorio, ve a `Settings → Pages → Source` y
   selecciona la rama `main` (carpeta raíz `/`). El sitio quedará publicado en
   `https://dariodorge.github.io/prueba_claude/`.
2. **Crea una cuenta en [Ko-fi](https://ko-fi.com)** (gratis, sin verificación,
   pagos vía PayPal/Stripe). Copia tu nombre de usuario y pégalo en
   `assets/monetization.js` → `kofiUsername`.
3. *(Opcional, cuando tengas algo de tráfico)* **Amazon Associates**: regístrate en
   [afiliados.amazon.es](https://afiliados.amazon.es), consigue tu "Tracking ID" y
   ponlo en `assets/monetization.js` → `amazonTag`.
4. *(Opcional)* **Gumroad**: si quieres vender un pack "Pro" (por ejemplo, las
   calculadoras en una hoja de cálculo descargable, sin anuncios), crea el producto en
   [gumroad.com](https://gumroad.com) y pega el enlace en `gumroadProductUrl`.
5. **Recomendado — [GoatCounter](https://www.goatcounter.com)** (gratis, sin tarjeta,
   solo email): crea una cuenta y un "site" nuevo, y pon el código de tu site (la
   parte antes de `.goatcounter.com`) en `assets/analytics.js` → `goatcounterSite`.
   Sin esto, el agente no tiene forma de saber qué herramientas se usan de verdad, así
   que no podrá reordenar ni retirar nada con criterio.

Con solo el paso 1 y 2 el sitio ya queda operativo y puede recibir propinas. El paso 5
es el que hace falta para que las decisiones de producto (qué destacar, qué quitar)
se basen en datos reales en vez de suposiciones.

## Cómo crece el sitio solo

Hay una Routine (tarea programada) que lanza un agente cada semana, sin que tengas que
hacer nada, y que:

- **Producto**: consulta las estadísticas de GoatCounter y reordena las tarjetas de
  `index.html` de más a menos usadas; retira (o archiva) herramientas que llevan
  semanas sin uso real, y añade una herramienta o mejora nueva de valor genuino.
- **Marketing**: yo no tengo cuentas en redes sociales ni puedo crear ninguna en tu
  nombre — eso sería suplantarte. Lo que sí hago: mantengo el SEO técnico al día
  (sitemap, meta tags, datos estructurados) y dejo listo en `marketing/` un texto
  nuevo cada semana lista para copiar y pegar donde quieras compartirlo.

Puedes desactivar la Routine o cambiar lo que hace pidiéndomelo.

## Estructura

- `index.html` — página principal con el listado de herramientas (ordenado por uso)
- `tools/*.html` — cada calculadora (HTML + CSS + JS, sin backend)
- `assets/style.css` — estilos compartidos
- `assets/monetization.js` — configuración de monetización (rellénala en el paso 2-4)
- `assets/analytics.js` — configuración de analítica de uso (paso 5)
- `sitemap.xml` / `robots.txt` — para que Google y otros buscadores indexen el sitio
- `marketing/` — textos ya redactados, listos para publicar donde tú decidas

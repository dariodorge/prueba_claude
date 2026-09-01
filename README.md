# 🧮 Herramientas Rápidas

**Calculadoras y conversores online, gratis, sin registro y sin anuncios invasivos.**

👉 **https://dariodorge.github.io/prueba_claude/**

Cansado de webs de calculadoras llenas de popups y anuncios agresivos, este proyecto
reúne herramientas del día a día que funcionan **enteramente en tu navegador** — nada
se envía a ningún servidor, no hace falta cuenta ni cookies de rastreo.

## Herramientas disponibles

| Herramienta | Para qué sirve |
|---|---|
| ⚖️ [Calculadora de IMC](https://dariodorge.github.io/prueba_claude/tools/imc.html) | Índice de Masa Corporal al instante |
| 🧾 [Calculadora de propina](https://dariodorge.github.io/prueba_claude/tools/propina.html) | Reparte la cuenta entre varias personas |
| % [Calculadora de porcentajes](https://dariodorge.github.io/prueba_claude/tools/porcentaje.html) | Descuentos, subidas y porcentajes entre cifras |
| 🔐 [Generador de contraseñas](https://dariodorge.github.io/prueba_claude/tools/contrasena.html) | Contraseñas seguras y aleatorias |
| 📈 [Interés compuesto](https://dariodorge.github.io/prueba_claude/tools/interes.html) | Simula el crecimiento de ahorros e inversiones |

Se añaden herramientas nuevas cada semana. Si echas en falta alguna, abre un
[issue](https://github.com/dariodorge/prueba_claude/issues) contando qué necesitas.

## Por qué es gratis

El proyecto se sostiene con propinas voluntarias (botón "invítame a un café" en cada
página) y, más adelante, enlaces de afiliado en herramientas donde tenga sentido.
Nunca vas a tener que pagar para usar ninguna calculadora.

## Código abierto

Todo el código es HTML/CSS/JS plano, sin frameworks ni build step — cualquiera puede
leerlo, copiarlo o proponer mejoras. Si quieres añadir tu propia herramienta, un PR
siguiendo el patrón de `tools/*.html` es bienvenido.

---

## Notas de mantenimiento (para quien opera el proyecto)

<details>
<summary>Cómo está automatizado este proyecto</summary>

**Objetivo:** generar unos ingresos pequeños y recurrentes que compensen el coste de
una suscripción mensual, con contenido y mantenimiento gestionados por un agente de
IA de forma autónoma. No es dinero garantizado: un sitio nuevo sin tráfico tarda en
generar ingresos, si es que lo hace.

**Automatizado sin intervención humana:**
- GitHub Pages sirve el sitio desde `main`.
- Ko-fi conectado para propinas (`assets/monetization.js`).
- Analítica de uso sin ninguna cuenta: cada visita se cuenta con un contador público
  anónimo; un GitHub Action diario (`.github/workflows/collect-stats.yml`) vuelca los
  datos en `data/stats.json`, y un agente semanal reordena/poda herramientas según uso
  real y añade valor nuevo.
- SEO técnico (sitemap, robots.txt, Open Graph, datos estructurados) mantenido al día.
- Textos de marketing listos para copiar/pegar en `marketing/`.

**Lo único que no se puede automatizar:** sacar el dinero real de Ko-fi a un banco o
PayPal. Por ley, el titular de una cuenta de cobro tiene que ser una persona física
verificada (normas KYC), así que ese paso concreto siempre es manual. Ko-fi acumula
las propinas sin problema mientras tanto.

### Estructura

- `index.html` — portada con el listado de herramientas (ordenado por uso)
- `tools/*.html` — cada calculadora (HTML + CSS + JS, sin backend)
- `assets/style.css` — estilos compartidos
- `assets/monetization.js` — configuración de monetización
- `assets/analytics.js` — contador de uso, no requiere configuración
- `.github/workflows/collect-stats.yml` — recoge visitas cada día, automático
- `.github/workflows/indexnow.yml` — avisa a Bing/Yandex de páginas nuevas (protocolo
  IndexNow, sin cuenta) cada vez que cambia el contenido
- `data/stats.json` — datos de uso actuales, generados automáticamente
- `sitemap.xml` / `robots.txt` — indexación en buscadores
- `*.txt` en la raíz (nombre largo hexadecimal) — clave de verificación de IndexNow, no borrar
- `marketing/` — textos ya redactados, listos para publicar

</details>

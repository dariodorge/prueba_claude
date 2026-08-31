// Analítica de uso del sitio (GoatCounter: gratis, sin tarjeta, respeta la privacidad).
// Rellena "goatcounterSite" para que el agente semanal pueda leer qué herramientas
// se usan más y reordenar/retirar contenido en consecuencia. Ver README.md.
window.ANALYTICS = {
  goatcounterSite: "", // ej: "dariodorge-herramientas" -> usará https://dariodorge-herramientas.goatcounter.com
};

(function () {
  const site = window.ANALYTICS.goatcounterSite;
  if (!site) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = "//gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", `https://${site}.goatcounter.com/count`);
  document.head.appendChild(s);
})();

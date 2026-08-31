// Analítica de uso del sitio: no necesita ninguna cuenta ni configuración.
// Cada visita a una herramienta incrementa un contador público y anónimo
// (api.countapi.xyz, servicio gratuito sin registro). GitHub Actions lee esos
// contadores automáticamente (ver .github/workflows/collect-stats.yml) y los
// vuelca en data/stats.json, que el agente usa para decidir qué destacar.
window.ANALYTICS = {
  namespace: "prueba-claude-dariodorge",
};

(function () {
  const path = window.location.pathname;
  const match = path.match(/tools\/([a-z0-9_-]+)\.html/i);
  const tool = match ? match[1] : "inicio";
  const url = `https://api.countapi.xyz/hit/${window.ANALYTICS.namespace}/${tool}`;
  fetch(url, { method: "GET", mode: "cors" }).catch(() => {
    // El contador es un extra informativo: si el servicio falla o está bloqueado
    // (algunos navegadores/bloqueadores de anuncios lo cortan), la web sigue
    // funcionando con normalidad.
  });
})();

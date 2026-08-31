// Configuración de monetización del sitio.
// Rellena estos valores con tus propias cuentas (ver README.md, sección "Puesta en marcha").
// Mientras estén vacíos, los bloques correspondientes simplemente no se muestran.
window.MONETIZATION = {
  kofiUsername: "dariodorge",       // ej: "tuusuario" -> https://ko-fi.com/tuusuario
  amazonTag: "",          // ej: "tuweb-21" (Amazon Associates España)
  gumroadProductUrl: "",  // ej: "https://tuusuario.gumroad.com/l/pro-pack"
};

function renderSupportBox() {
  const box = document.getElementById("support-box");
  if (!box) return;
  const { kofiUsername, gumroadProductUrl } = window.MONETIZATION;
  if (!kofiUsername && !gumroadProductUrl) {
    box.style.display = "none";
    return;
  }
  let html = "<p>¿Te ha resultado útil esta herramienta?</p>";
  if (kofiUsername) {
    html += `<a class="kofi" href="https://ko-fi.com/${kofiUsername}" target="_blank" rel="noopener">☕ Invítame a un café</a>`;
  }
  if (gumroadProductUrl) {
    html += `<p style="margin-top:12px;"><a href="${gumroadProductUrl}" target="_blank" rel="noopener">Consigue el pack Pro sin anuncios →</a></p>`;
  }
  box.innerHTML = html;
}

function renderAffiliateBox(searchTerm, label) {
  const box = document.getElementById("affiliate-box");
  if (!box) return;
  const { amazonTag } = window.MONETIZATION;
  if (!amazonTag || !searchTerm) {
    box.style.display = "none";
    return;
  }
  const url = `https://www.amazon.es/s?k=${encodeURIComponent(searchTerm)}&tag=${amazonTag}`;
  box.innerHTML = `Recomendado: <a href="${url}" target="_blank" rel="noopener sponsored">${label}</a> <span style="opacity:.7">(enlace de afiliado, sin coste extra para ti)</span>`;
}

document.addEventListener("DOMContentLoaded", renderSupportBox);

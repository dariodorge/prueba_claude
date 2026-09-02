// Widget embebible de la calculadora de IMC de Herramientas Rápidas.
// Uso: <div data-hr-widget="imc"></div><script src=".../embed/imc.js" async></script>
// Usa Shadow DOM para no chocar con los estilos de la web que lo incrusta.
(function () {
  function render(el) {
    const root = el.attachShadow({ mode: "open" });
    root.innerHTML = `
      <style>
        :host { all: initial; }
        .hr-box { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          border: 1px solid #e4e4ec; border-radius: 12px; padding: 16px; max-width: 320px;
          background: #fff; color: #1c1c28; box-sizing: border-box; }
        .hr-box * { box-sizing: border-box; }
        .hr-box h4 { margin: 0 0 10px; font-size: 1rem; }
        .hr-box label { display: block; font-size: 0.85rem; font-weight: 600; margin: 8px 0 4px; }
        .hr-box input { width: 100%; padding: 8px 10px; border-radius: 6px; border: 1px solid #e4e4ec; font-size: 0.95rem; }
        .hr-box button { margin-top: 12px; width: 100%; background: #4f46e5; color: #fff; border: none;
          padding: 10px; border-radius: 6px; font-weight: 600; cursor: pointer; }
        .hr-box .res { margin-top: 10px; font-weight: 600; font-size: 0.95rem; min-height: 1.2em; }
        .hr-box .credit { margin-top: 10px; font-size: 0.72rem; text-align: right; }
        .hr-box .credit a { color: #4f46e5; text-decoration: none; }
      </style>
      <div class="hr-box">
        <h4>⚖️ Calculadora de IMC</h4>
        <label>Peso (kg)</label>
        <input type="number" class="hr-peso" placeholder="70" />
        <label>Altura (cm)</label>
        <input type="number" class="hr-altura" placeholder="175" />
        <button type="button">Calcular</button>
        <div class="res"></div>
        <div class="credit">Widget de <a href="https://dariodorge.github.io/prueba_claude/tools/imc.html" target="_blank" rel="noopener">Herramientas Rápidas</a></div>
      </div>
    `;
    const peso = root.querySelector(".hr-peso");
    const altura = root.querySelector(".hr-altura");
    const res = root.querySelector(".res");
    root.querySelector("button").addEventListener("click", function () {
      const p = parseFloat(peso.value);
      const aCm = parseFloat(altura.value);
      if (!p || !aCm) {
        res.textContent = "Introduce peso y altura válidos.";
        return;
      }
      const aM = aCm / 100;
      const imc = p / (aM * aM);
      let cat = "Peso normal";
      if (imc < 18.5) cat = "Bajo peso";
      else if (imc < 25) cat = "Peso normal";
      else if (imc < 30) cat = "Sobrepeso";
      else cat = "Obesidad";
      res.textContent = "IMC: " + imc.toFixed(1) + " — " + cat;
    });
  }

  document.querySelectorAll('[data-hr-widget="imc"]').forEach(render);
})();

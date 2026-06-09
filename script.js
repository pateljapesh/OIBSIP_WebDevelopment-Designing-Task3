/* ── Temperature Converter JS ─────────────────── */

const tempInput   = document.getElementById('tempInput');
const errorMsg    = document.getElementById('errorMsg');
const convertBtn  = document.getElementById('convertBtn');
const results     = document.getElementById('results');
const resultsGrid = document.getElementById('resultsGrid');
const unitTag     = document.getElementById('unitTag');

const radios  = document.querySelectorAll('input[name="unit"]');
const lblMap  = { C: 'lbl-C', F: 'lbl-F', K: 'lbl-K' };
const tagMap  = { C: '°C',    F: '°F',    K: 'K'     };

/* ── Track selected unit ─────────────────────── */
let selectedUnit = 'C';

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    selectedUnit = radio.value;

    // Update active radio button style
    document.querySelectorAll('.radio-btn').forEach(lb => lb.classList.remove('active'));
    document.getElementById(lblMap[selectedUnit]).classList.add('active');

    // Update unit tag in input
    unitTag.textContent = tagMap[selectedUnit];

    // Hide results on unit change
    results.classList.remove('visible');
    clearError();
  });
});

/* ── Conversion formulas ─────────────────────── */
function convert(value, from) {
  let celsius;
  switch (from) {
    case 'C': celsius = value; break;
    case 'F': celsius = (value - 32) * 5 / 9; break;
    case 'K': celsius = value - 273.15; break;
  }
  return {
    C: celsius,
    F: celsius * 9 / 5 + 32,
    K: celsius + 273.15
  };
}

/* ── Format number ───────────────────────────── */
function fmt(n) {
  if (!isFinite(n)) return 'N/A';
  // Up to 4 decimal places, strip trailing zeros
  return parseFloat(n.toFixed(4)).toString();
}

/* ── Render results ──────────────────────────── */
function renderResults(converted, from) {
  const units = [
    { key: 'C', label: 'Celsius',    symbol: '°C',  css: 'celsius'    },
    { key: 'F', label: 'Fahrenheit', symbol: '°F',  css: 'fahrenheit' },
    { key: 'K', label: 'Kelvin',     symbol: 'K',   css: 'kelvin'     },
  ].filter(u => u.key !== from);   // show only the 2 target units

  resultsGrid.innerHTML = units.map((u, i) => `
    <div class="result-card ${u.css}" style="animation-delay:${0.05 + i * 0.07}s">
      <span class="result-label ${u.css}">${u.label}</span>
      <span class="result-value">${fmt(converted[u.key])}</span>
      <span class="result-unit">${u.symbol}</span>
    </div>
  `).join('');

  results.classList.remove('visible');
  // Force reflow to restart animation
  void results.offsetWidth;
  results.classList.add('visible');
}

/* ── Validation helpers ──────────────────────── */
function showError(msg) {
  errorMsg.textContent = msg;
  errorMsg.classList.add('visible');
  tempInput.classList.add('error');
}
function clearError() {
  errorMsg.classList.remove('visible');
  tempInput.classList.remove('error');
}

/* ── Main convert action ─────────────────────── */
function doConvert() {
  clearError();

  const raw = tempInput.value.trim();
  if (raw === '') {
    showError('⚠ Please enter a temperature value.');
    return;
  }

  const value = parseFloat(raw);
  if (isNaN(value)) {
    showError('⚠ Please enter a valid number.');
    return;
  }

  // Kelvin cannot be below 0
  if (selectedUnit === 'K' && value < 0) {
    showError('⚠ Kelvin cannot be negative (absolute zero = 0 K).');
    return;
  }

  // Celsius cannot be below −273.15
  if (selectedUnit === 'C' && value < -273.15) {
    showError('⚠ Temperature below absolute zero (−273.15 °C).');
    return;
  }

  // Fahrenheit cannot be below −459.67
  if (selectedUnit === 'F' && value < -459.67) {
    showError('⚠ Temperature below absolute zero (−459.67 °F).');
    return;
  }

  const converted = convert(value, selectedUnit);
  renderResults(converted, selectedUnit);
}

/* ── Event listeners ─────────────────────────── */
convertBtn.addEventListener('click', doConvert);

tempInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') doConvert();
});

// Clear error while typing
tempInput.addEventListener('input', () => {
  if (errorMsg.classList.contains('visible')) clearError();
  results.classList.remove('visible');
});

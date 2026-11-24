function calcularIVA(base, tipo = 21) {
  return base * (tipo / 100);
}

function precioFinal(base, tipo = 21) {
  return Number((base + calcularIVA(base, tipo)).toFixed(2));
}

module.exports = { calcularIVA, precioFinal };

function calcularIVA(base, tipo = 21) {
  return base * (tipo / 100);
}

module.exports = { calcularIVA };

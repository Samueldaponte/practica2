/**
 * Calcula el importe del IVA correspondiente a una base imponible.
 * @param {number} base - Importe sin impuestos, en euros.
 * @param {number} [tipo=21] - Tipo impositivo en porcentaje.
 * @returns {number} Importe del IVA calculado.
 */
function calcularIVA(base, tipo = 21) {
  return base * (tipo / 100);
}

/**
 * Calcula el precio final aplicando el IVA.
 * @param {number} base - Importe sin impuestos, en euros.
 * @param {number} [tipo=21] - Tipo impositivo en porcentaje.
 * @returns {number} Importe total redondeado a dos decimales.
 * @throws {RangeError} Si la base es negativa.
 */
function precioFinal(base, tipo = 21) {
  if (base < 0) {
    throw new RangeError('La base imponible no puede ser negativa');
  }
  return Number((base + calcularIVA(base, tipo)).toFixed(2));
}

/**
 * Aplica un descuento porcentual sobre un precio dado.
 * @param {number} precio - Precio original, en euros.
 * @param {number} porcentaje - Porcentaje de descuento a aplicar.
 * @returns {number} Precio tras aplicar el descuento, redondeado a dos decimales.
 */
function aplicarDescuento(precio, porcentaje) {
  return Number((precio - (precio * porcentaje) / 100).toFixed(2));
}

module.exports = { calcularIVA, precioFinal, aplicarDescuento };

let Currency = function(waluta) {
    this.waluta = waluta;
}

Currency.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
}

Currency.prototype.zlotyToUS = function(zloty) {
    return this.roundTwoDecimals(zloty / this.waluta);
}

Currency.prototype.zlotyToEuro = function(zloty) {
    return this.roundTwoDecimals(zloty / this.waluta);
}
Currency.prototype.zlotyToFunt = function(zloty) {
    return this.roundTwoDecimals(zloty / this.waluta);
}
Currency.prototype.zlotyToCanadian = function(zloty) {
    return this.roundTwoDecimals(zloty / this.waluta);
}
Currency.prototype.zlotyToRubieIn = function(zloty) {
    return this.roundTwoDecimals(zloty / this.waluta);
}
module.exports = exports = Currency;
    
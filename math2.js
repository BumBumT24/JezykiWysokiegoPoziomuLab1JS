let Matma = function(a,b) {
    this.a=a;
    this.b=b;
}

Matma.prototype.Dodawanie = function() {
    return Math.round(parseInt(this.a)+parseInt(this.b));
}
Matma.prototype.Odejmowanie = function() {
    return Math.round(parseInt(this.a)-parseInt(this.b));
}
Matma.prototype.Potęgowanie = function() {
    return Math.round(parseInt(this.a)**parseInt(this.b));
}
Matma.prototype.Dzielenie = function() {
    return Math.round(parseInt(this.a)/parseInt(this.b));
}
Matma.prototype.Pierwiastkowanie = function() {
    return Math.round(Math.sqrt(parseInt(this.a)));
}
module.exports = exports = Matma;
    
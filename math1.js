function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}
exports.Dodawanie = function(a,b){
    return roundTwoDecimals(parseInt(a)+parseInt(b));
}
exports.Odejmowanie = function(a,b){
    return roundTwoDecimals(parseInt(a)-parseInt(b));
}
exports.Potęgowanie = function(a,b){
    return roundTwoDecimals(parseInt(a)**parseInt(b));
}
exports.Dzielenie = function(a,b){
    return roundTwoDecimals(parseInt(a)/parseInt(b));
}
exports.Pierwiastkowanie = function(a){
    return roundTwoDecimals(Math.sqrt(parseInt(a)));
}
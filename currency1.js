let zlotyDollar = 4.0221;
let zlotyEuro = 4.34945;
let zlotyFunt = 5.21598;
let zlotyRubieIn = 0.04784;
let zlotyDollarKanada = 2.893;
function roundTwoDecimals(amount) {
return Math.round(amount * 100) / 100;
}

exports.zlotyToUS = function(zloty) {
    return roundTwoDecimals(zloty / zlotyDollar);
}
exports.zlotyToEuro = function(zloty) {
    return roundTwoDecimals(zloty / zlotyEuro);
}
exports.zlotyToFunt = function(zloty) {
   return roundTwoDecimals(zloty / zlotyFunt);
}
exports.zlotyToRubieIn = function(zloty) {
    return roundTwoDecimals(zloty / zlotyRubieIn);
}
exports.zlotyToCanadian = function(zloty) {
    return roundTwoDecimals(zloty / zlotyDollarKanada);
}

    
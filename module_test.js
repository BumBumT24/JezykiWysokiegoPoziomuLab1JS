const currency1 = require('./currency1');

console.log('Zad1 poprzez referncje do obiektu');

console.log('50 złotych odpowiada następującej ilości dolarów amerykańskich:');
console.log(currency1.zlotyToUS(50));
console.log('30 złotych odpowiada następującej ilości dolarów kanadyjskich:');
console.log(currency1.zlotyToCanadian(30));
console.log('100 złotych odpowiada następującej ilości funtów:');
console.log(currency1.zlotyToFunt(100));
console.log('200 złotych odpowiada następującej ilości rubi indyjskich:');
console.log(currency1.zlotyToRubieIn(200));
console.log('1000 złotych odpowiada następującej ilości euro:');
console.log(currency1.zlotyToEuro(1000));


let Currency = require('./currency2');
let zlotyDollar = 4.0221;
let zlotyEuro = 4.34945;
let zlotyFunt = 5.21598;
let zlotyRubieIn = 0.04784;
let zlotyDollarKanada = 2.893;

console.log('zad1 poprzez podejscie obiektowe');

let currency0 = new Currency(zlotyDollar);
console.log('60 złotych odpowiada następującej ilości dolarów amerykańskich:');
console.log(currency0.zlotyToUS(60));

let currency2 = new Currency(zlotyDollarKanada);
console.log('60 złotych odpowiada następującej ilości dolarów kanadyjskich:');
console.log(currency2.zlotyToCanadian(60));

let currency3 = new Currency(zlotyFunt);
console.log('60 złotych odpowiada następującej ilości funtów:');
console.log(currency3.zlotyToFunt(60));

let currency4 = new Currency(zlotyRubieIn);
console.log('60 złotych odpowiada następującej ilości rubi indyjskich:');
console.log(currency4.zlotyToRubieIn(60));

let currency5 = new Currency(zlotyEuro);
console.log('60 złotych odpowiada następującej ilości euro:');
console.log(currency5.zlotyToEuro(60));


const math1 = require('./math1');

const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Podaj 2 liczby do obliczen A=",(A) =>{
    let a = A;
    rl.question("Podaj B=",(B)=>{
        let b = B;
        console.log('zad2 poprzez referncje do obiektu:');
        console.log('Dodawanie A i B wynosi:',math1.Dodawanie(a,b));
        console.log('Odejmowanie A i B wynosi:',math1.Odejmowanie(a,b));
        console.log('Potęgowanie A i B wynosi:',math1.Potęgowanie(a,b));
        console.log('Dzielenie A i B wynosi:',math1.Dzielenie(a,b));
        console.log('Pierwiastkowanie A i B wynosi:',math1.Pierwiastkowanie(a));

        console.log('zad2 poprzez podejscie obiektowe');
        let Matma = require('./math2');
        let math = new Matma(a,b);
        console.log(math.Dodawanie());
        console.log(math.Odejmowanie());
        console.log(math.Potęgowanie());
        console.log(math.Dzielenie());
        console.log(math.Pierwiastkowanie());
        
    })
    
});

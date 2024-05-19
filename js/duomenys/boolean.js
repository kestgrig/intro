/*

BOOLEAN - logines reiksmes

-true
-false


BOOLEAN OPERATORIAI:
- && (and)
- || (or)
- ! (not)

String:
- jei tuscias - false
- jei ne tuscias - true

Array:
- jei tuscias - true
- jei ne tuscias - true

Number:
- jei nulis - false
- jei NaN - false
- jei ne nulis - true
- jei Infinity - true
- jei -Infinity - true

Object:
- jei tuscias - true
- jei ne tuscias - true




*/

const username = 'Jonas';
const age = 99;
const isSunShining = true;
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log('KAIP NENAUDOTI:', (true + true) * (true + true + true));
console.log('KAIP NENAUDOTI:', true * false);

console.log('-----------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// MERGINA
// kada eisiu i pasimatyma?
// - turi buti grazus
// - turi buti jaunas
// - turi buti turtingas

const isBeautiful = false;
const isYoung = true;
const isRich = false;

const willIGoTo = isBeautiful || isYoung || isRich;
console.log('>>>', willIGoTo);

console.clear();

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true && true && true);

console.clear();
console.log(true && true || true);

console.log(true && true || false);

console.clear();
console.log(true && true || true);
console.log(true && true || false);

console.log(true && false || true);
console.log(true && false || false);

console.log(false && true || true);
console.log(false && true || false);

console.log(false && false || true);
console.log(false && false || false);

console.log('---------');

console.log(true || true && true);
console.log(true || true && false);

console.log(true || false && true);
console.log(true || false && false);

console.log(false || true && true);
console.log(false || true && false);

console.log(false || false && true);
console.log(false || false && false);

console.log('---------');

// ND visos kombinacijos
console.log(true && true && true && true);
console.log(true && true && true && false);

console.log(true && true && true || true);
console.log(true && true && true || false);

console.clear();

console.log(!true);
console.log(!false);
console.log(!!false);
// daugiau nei 2 sauktukai - nerasyti, please... 
console.log(!!!false);
console.log(!!!!false);


console.clear();

if (false) {
    console.log(true);
} else {
    console.log(false);
}
console.clear();

if (4 === '4') {
    console.log('Taip');
} else {
    console.log('Ne');
}


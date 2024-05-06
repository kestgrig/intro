/* 
IF - palyginimas

Palyginimo operatoriai:
- Visi: <, >, <=, >=, ==, !=, ===, !==
- Naudotini: <, >, <=, >=, ===, !=
- Nenaudotini: ==, !==

Sablonai
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}

*/

const age = 50;
const ageLimit = 18;

// pirmas variantas
if (age > ageLimit) {
    console.log ('Sorry, bet per jaunas...');
} 

// antras variantas
if (age < ageLimit) {
    console.log ('Sorry, bet per jaunas...');
} else {
    console.log ('Ok, gali uzeiti.');
}

console.clear();

if (4 == 2) {
    console.log ('TAIP, daugiau');
} else {
    console.log('NE, maziau');
}
console.clear();

// 3 variantas
// red -> raudona
// blue -> melyna
// green -> zalia
// other -> Nezinau tokios spalvos....

const color1 = 'white';
function colorTranslation(color) {
    
}
let translation = '';

if (color === 'red') {
    translation = ('Raudona');
} else if (color1 === 'blue') {
    translation = ('Melyna');
} else if (color1 === 'green') {
    translation = ('Zalia');
} else {
    translation = ('Nezinau tokios spalvos');
}

console.log('>>>', translation);


console.log(colorTranslation('white'));
console.log(colorTranslation('black'));
console.log(colorTranslation('red'));
console.log(colorTranslation('blue'));
console.log(colorTranslation('grren'));
console.log(colorTranslation('white'));
console.log(colorTranslation('white'));
console.log(colorTranslation('white'));
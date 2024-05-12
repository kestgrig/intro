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

// Pirmas variantas

if (age > ageLimit) {
    console.log('Sorry, bet per jaunas...');
}

// Antras variantas

if (age < ageLimit) {
    console.log('Sorry, bet per jaunas...');
} else {
    console.log('Ok, gali uzeiti.');
}

console.clear();

if (4 == 2) {
    console.log('TAIP, daugiau');
} else {
    console.log('NE, maziau');
}
console.clear();

// 3 variantas
// red -> raudona
// blue -> melyna
// green -> zalia
// other -> Nezinau tokios spalvos....


function colourTranslation1(colour) {
    let translation1 = '';

    if (colour === 'red') {
        translation1 = 'raudona';
    } else if (colour === 'blue') {
        translation1 = 'melyna';
    } else if (colour === 'brown') {
        translation1 = 'ruda';
    } else if (colour === 'green') {
        translation1 = 'zalia';
    } else if (colour === 'white') {
        translation1 = 'balta';
    } else {
        translation1 = '...';
    }

    return colour + '->' + translation1;
}

console.log(colourTranslation1('white'));
console.log(colourTranslation1('black'));
console.log(colourTranslation1('red'));
console.log(colourTranslation1('blue'));
console.log(colourTranslation1('brown'));
console.log(colourTranslation1('yellow'));
console.log(colourTranslation1('pink'));
console.log(colourTranslation1('green'));
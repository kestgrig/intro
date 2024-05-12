/*

FUNCTION - funkcija, perpanaudojama logika
() - parametru blokas
{} - logikos blokas

Input +> Function() => Output
*/

function funkcijosPavadinimas() {
}

const a = funkcijosPavadinimas();

console.log(a);

function empty() {
    return undefined;

}

console.log(empty());

function giveMeFive() {
    return 5;
}

function giveMeSix() {
    return 6;
}
console.log(giveMeFive());
console.log(giveMeSix());

/*
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!
*/

function intro(name, surname) {
    return 'Laba diena, as esu ' + name + ' ' + surname + '!';
}
console.log(intro('Jonas', 'Jonaitis'));
console.log(intro('Maryte', 'Marytaite'));
console.log(intro('Ona', 'Onaityte'));
console.log(intro('Petras', 'Petraitis'));

/*
Input:
- pirmas skaicius 10
- antras skaicius 12

Output:
120
*/

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

console.log(multiply(5, 7));
console.log(multiply(12, 8));
console.log(multiply(-55, 7));
console.log(multiply(5.5, 7));
console.log(multiply(3.14, 7));

// Mano vardas yra Arunas, man 28 metai ir as megstu kava.
// Mano vardas yra Kestutis, man 30 metu ir as megstu begti.

function iLike(name, age, item) {
    return 'Mano vardas yra ' + name + ', man ' + age + ' metai ir as megstu ' + item + '.';

}

console.log(iLike());
console.log(iLike('Arunas'));
console.log(iLike('Kestutis', 30));
console.log(iLike('Agne', 30, 'kava'));

console.clear();

function price(value) {
    const PVM = 21;
    const priceIncrease = 1 + PVM / 100;
    const priceForSale = value * priceIncrease;

    return priceForSale;
}

console.log(price(100)); // 121
console.log(price(150)); // 121

function words(w1, w2, w3) {
    let sentence = 'Baltic countries: ';
    sentence += w1;
    sentence += ', ';
    sentence += w2;
    sentence += ', ';
    sentence += w3;
    sentence += '. ';

    return sentence;
}

console.log(words('Latvia', 'Estonia', 'Lithuania'));


//Kintamuju inicijavimas
console.log('Kintamuju inicijavimas')

// 1.) 3 kintamieji su skaiciais

const n = 7;
console.log(n);
const n1 = 10;
console.log(n1);
const n2 = 20;
console.log(n2);

console.log('--------------------')

// 2.) 3 kintamieji su tekstu

const player = ('Sabonis');
console.log(player);
const player1 = ('Valanciunas');
console.log(player1);
const player2 = ('Kleiza');
console.log(player2);

console.log('--------------------')

// 3.) 3 saraso tipo kintamieji su skaiciais

const points = [1, 3, 2, 2, 3];
console.log(points);
const points1 = [0, 3, 2, 1, 3];
console.log(points1);
const points2 = [1, 3, 1, 3, 3];
console.log(points2);

console.log('--------------------')

// 4.) 3 saraso tipo kintamieji su tekstu

const surname = ['Kleiza', 'Sabonis', 'Valanciunas', 'Ilgauskas', 'Jasikevicius'];
console.log(surname);
const name = ['Linas', 'Domantas', 'Jonas', 'Zydrunas', 'Sarunas'];
console.log(name);
const city = ['Kaunas', 'Panevezys', 'Utena', 'Vilnius', 'Klaipeda'];
console.log(city);


console.log('--------------------')
console.log('Veiksmai su kintamaisiais')

// Veiksmai su kintamaisiais

// susumuoti visus skaiciaus tipo kintamuosiuos

const x = 10;
const x1 = 20;
const x2 = 5;
const x3 = 8;
const x4 = 3;

const sumNumbers = x + x1 + x2 + x3 + x4;

console.log(sumNumbers);

console.log('--------------------')

// sujungti visus teksto tipo kintamuosius

const a = 'Per';
const a1 = 'kancias'
const a2 = 'i'
const a3 = 'zvaigzdes';

const words = a + ' ' + a1 + ' ' + a2 + ' ' + a3;

console.log(words);

console.log('--------------------')

// apskaiciuoti verte is sarasu kuriu verciu tipas yra skaiciai pagal logika 1-2+3-4+5

const numbers = [20, 3, 50, 80, 10];
const numbers1 = [23, 85, 85, 86, 5];

const numbersSum = numbers[0] - numbers[1] + numbers1[2] - numbers1[3] + numbers[4];

console.log(numbersSum);

console.log('--------------------')

// apskaiciuoti verte is sarasu kuriu verciu tipas yra skaiciai pagal logika 1-2+3-4+5

const personName = ['Jonas', 'Simas', 'Linas', 'Ausra', 'Roma'];

const sumName = personName[4] + ', ' + personName[3] + ', ' + personName[2] + ', ' + personName[1] + ', ' + personName[0];

console.log(sumName);

console.log('--------------------')

// Kintamųjų palyginimas

// Tarpusavyje palyginti skaičiaus tipo kintamuosius:

const v = 2;
const v1 = 5;

// kuris didesnis
if (v < v1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.log();

// kuris mazesnis

if (v > v1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

// ar jie lygus

if (v === v1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

// ar jie nelygūs

if (v != v1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

//kuris didesnis arba lygus

if (v <= v1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

// kuris mazesnis arba lygus

if (v >= v1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.log('--------------------');

// isvesti teksto tipo kintamuju ilgius

const h = 'Kestutis';
const h1 = 'Algirdas';
const h2 = 'Gediminas';

console.log(h, h.length);
console.log(h1, h1.length);
console.log(h2, h2.length);

console.log('--------------------');

// Tarpusavyje palyginti teksto tipo kintamųjų ilgius:

// kuris didesnis
if (h.length < h1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.log();

// kuris mazesnis

if (h.length > h1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

// ar jie lygus

if (h.length === h1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

// ar jie nelygūs

if (h.length != h1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

//kuris didesnis arba lygus

if (h.length <= h1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

// kuris mazesnis arba lygus

if (h.length >= h1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.log('--------------------');

// isvesti saraso tipo kintamuju ilgius

const m = ['Jonas', 'Gediminas', 'Linas', 'Tautvydas', 'Roma'];
const m1 = ['Jonas', 'Gediminas', 'Linas', 'Tautvydas']
console.log(m[0].length, m[1].length, m[2].length, m[3].length, m[4].length);

console.log(m.length);
console.log(m1.length)
//Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:

console.log('--------------------');

// kuris didesnis
if (m.length < m1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.log();

// kuris mazesnis

if (m.length > m1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

// ar jie lygus

if (m.length === m1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

// ar jie nelygūs

if (m.length != m1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

//kuris didesnis arba lygus

if (m.length <= m1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

// kuris mazesnis arba lygus

if (m.length >= m1.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.log('--------------------');

console.clear();

// ciklo for panaudojimas

// suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 … 0
// 0 … 4
// 0 … 100
// 574 … 815
// - 50 … 50
// - 70 … 30

function intervalSum(start, finish) {
    let answer = 0;

    for (let i = start; i <= finish; i++) {
        answer += i;
    }
    return answer;
}

console.log(intervalSum(0, 0));
console.log(intervalSum(0, 4));
console.log(intervalSum(0, 100));
console.log(intervalSum(574, 815));
console.log(intervalSum(-50, 50));
console.log(intervalSum(-70, 30));

// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo: pvz.: “abcdef” -> “fedcba”

function reverseString(text) {
    let answer = '';

    for (let i = 0; i < 6; i++) {
        answer += text[text.length - 1 - i];
    }
    return answer;
}

console.log(reverseString('abcdef'), '-->', 'fedcba');

console.log('-----------------')
// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:

function numberCount(start, finish, step) {
    let answer = 0;

    for (let i = start; i <= finish; i++) {
        // jeigu, skaiciu dalinant is step liekana yra nulis, tai answer dydiname vienu vienetu
        if (i % step === 0) {
            answer++;
        }
    }

    return 'Skaičių intervale tarp ' + start + ' ir ' + finish + ', besidalijančių be liekanos iš ' + step + ' yra ' + answer + ' vienetai.';
}

console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));

console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));

console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 18, 5));
console.log(numberCount(-18, 18, 7));

console.clear();

// Funkcija pavadinimu “tusciaFunkcija”:

// nepriima jokių kintamųjų

function tusciaFunkcija() {

}

// neatlieka jokios vidinės logikos

function tusciaFunkcija() {

}

// grazina boolean tipo reikšme “false”

function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

// Funkcija pavadinimu “daugyba”:

// priima du skaičiaus tipo kintamuosius


function daugyba(skaicius1, skaicius2) {

}


// atskirame kintamajame įsimena sandaugos reikšmę

function daugyba(skaicius1, skaicius2) {
    const answer = skaicius1 * skaicius2;

}

// gražina saudaugos rezultatą

function daugyba(skaicius1, skaicius2) {
    const answer = skaicius1 * skaicius2;
    return answer;

}

console.log(daugyba(10, 20));
console.log(daugyba(-10, 20));
console.log(daugyba(10, -20));
console.log(daugyba(0.45, 10));




/*
Duomens tipo nustatymas

TYPEOF (duomens tipo nustatymo operatorius)
*/

function empty() {
}

console.log(typeof 5);
console.log(typeof 3.1415);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof '');
console.log(typeof 'labas');
console.log(typeof ' ');
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof ['a', 'b', 'c']);
console.log(typeof {});
console.log(typeof empty);

console.log('-----------------');

// Kai norite patikrinti ar TAI yra masyvas

console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray('labas'));
console.log(Array.isArray(true));
console.log(Array.isArray(empty));

console.log('-----------------');

// tikrinti ar tai yra null
const tikrinamasDalykas = null;
if (tikrinamasDalykas === null) {
    console.log('taip');
} else {
    console.log('ne');
}

const a = '2142562';
console.log(a);

if (typeof a === 'string') {
    console.log('As dirbu su STRING');
} else {
    console.log('As dirbu ne su STRING:');
}

if (typeof a !== 'string') {
    console.log('As dirbu ne su STRING:');
} else {
    console.log('As dirbu su STRING');
}

/*
ARRAY -masyvas, sąrašas, listas, matrica, kolekcija
*/

const empty = [];
console.log(empty);

const marks = [5, 2, 8, 4, 6, 7, 10];
console.log(marks);

console.log('>>>', marks[0]);
console.log('>>>', marks[1]);
console.log('>>>', marks[2]);
console.log('>>>', marks[3]);
console.log('>>>', marks[4]);
console.log('>>>', marks[5]);

const sum21 = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
const count2 = marks.length;
const average2 = sum21 / count2;

console.log('Suma', sum21);
console.log('Kiekis', count2);
console.log('vidurkis', average2);

let sum3 = 0;
let index = 0;

sum3 += marks[index];
index++;

sum3 += marks[index];
index += 1;
sum3 += marks[index];
index += 1;
sum3 += marks[index];
index += 1;
sum3 += marks[index];
index += 1;

console.log(sum3);

let sum4 = 1;
let index1 = 0;

sum4 += marks[++index1];



console.log('1.) ' + sum4);

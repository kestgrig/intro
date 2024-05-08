/*
FOR - pagrindinis ciklas (en. loop)
*/

// atstumas: 100m
// zingsnis: 1m
// zingsniu: 80-200

// ciferblatas: 60 padalu
// trukme padalos 1s
// laiko? 60s

console.log('STARTAS')

for (let i = 20; i < 10; i--) {
    console.log(i);
}

for (let i = 200; i > 100; i -= 23) {
    console.log(i / 10);
}

console.log('FINISAS');

// 010101010101 <=> 1485,584

console.log(0.1 + 0.2)

console.clear();

for (let i = 0; i < 5; i++) {
    console.log(i, 'Sveiki visi');

}
console.clear();

const colors = ['white', 'black', 'red', 'green', 'blue', 'violet', 'silver'];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);
console.log(colors[5]);
console.log(colors[6]);

console.log('---------');

for (let i = 0; i < 7; i++) {
    console.log(i, colors[i]);

}

console.clear();

const colors1 = ['white', 'black', 'red', 'blue', 'purple'];

for (let i = 0; i < colors1.length; i++) {
    console.log(i, colors1[i]);

}
console.log('---------');

for (let i = colors1.length - 1; i > -1; i--) {
    console.log(i, colors[i])
}
console.clear();

const marks = [10, 2, 8, 4, 6];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}

console.log(sum / marks.length);

const jonas = [];
const maryte = [10, 2];
const petras = [9, 10, 7];
const ona = [1, 2, 3, 5, 8, 10, 9]

function marksAverage(marks) {
    if (marks.length === 0) {
        return 'Nera pazymiu';
    }

    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;

}

console.log(marksAverage(jonas));
console.log(marksAverage(maryte));
console.log(marksAverage(petras));
console.log(marksAverage(ona));

const text = 'Labas';

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);



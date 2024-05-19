const matrix = [10, 2, 8, 4, 6];

console.log(matrix);

for (let i = 0; i < matrix.length; i++) {
    console.log(i, '-', matrix[i]);
}

const students = [
    [10, 9, 8, 7],
    [9, 9, 8, 7, 9, 9, 8, 5],
    [10, 9, 8, 7, 9, 9, 10, 5, 6, 4],
    [10, 10, 10, 10, 9, 9, 10, 10, 10, 10],
];

// jonas (0)
const jonoPazymiai = students[0];
console.log(jonoPazymiai);
for (let i = 0; i < jonoPazymiai.length; i++) {
    console.log('Jonas', jonoPazymiai[i])
}

console.log(students[0]);
for (let i = 0; i < students[0].length; i++) {
    console.log('Jonas', students[i])
}

//maryte (1)
const marytesPazymiai = students[1];
console.log(marytesPazymiai);
for (let i = 0; i < students[1].length; i++) {
    console.log('Maryte', students[1])
}
console.clear();

const gorila = [
    [1, 2, 3],
    [4, [5, 6], 7],
    [
        [8, 9, 10],
        [11, 12, 13, [14, 15]],
    ],

];



console.log(gorila[2]);
console.log('------------');
console.log(gorila[2][0]);
console.log(gorila[2][0][0]);
console.log(gorila[2][0][1]);
console.log(gorila[2][0][2]);
console.log('------------');


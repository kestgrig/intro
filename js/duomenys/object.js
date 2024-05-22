// OBJECT - objektas

const empty = {};
console.log(empty);

const stud1 = {
    name: 'Jonas',
    age: 50,
    isMarried: true,
};
console.log(stud1);
console.log(stud1.name);
console.log(stud1.age);
console.log(stud1.isMarried);

const students = [
    { name: 'Jonas', age: 20, isMarried: true },
    { name: 'Arunas', age: 28, isMarried: false },
    { name: 'Aronas', age: 40, isMarried: false },
    { name: 'Agne', age: 30, isMarried: true },
    { name: 'Kestutis', age: 30, isMarried: true },
];

function introduction(stud) {
    const status = stud.isMarried ? 'esu' : 'nesu';
    return `Sveiki, as ${stud.name}', man ${stud.age} metu/metai ir ${status} vedes/vedusi`;

}

for (let i = 0; i < students.length; i++) {
    console.log(introduction(students[i]));
}

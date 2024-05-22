/*
UNARY - vienybė (a++, a--)
BINARY - dvejybė (a+b)
TERNARY - trejybė (a?b:c)
*/

let a = 0;

if (4 < 2) {
    a = 10;
} else {
    a = 5;
}

console.log(a);

const b = 4 > 2 ? 888 : 666;
console.log(b);

const c = 4 < 2 ? 123 : 456;
console.log(c);

const d = 1 + (2 > 3 ? 4 : 5);
console.log(d);

const e = 1 > 2 ? 3 : 4 + 5;
console.log(e);

const f = 'labas'.length > 0 ? 'ilgas' : 'tuscias';
console.log(f);
//                            raidziu indeksai
const g = 'pomidoras'[1 < 2 ? 0 : 5];
console.log(g);

// gIndex
const ggIndex = 2 + (1 < 2 ? 0 : 5);
const gg = 'pomidoras'[ggIndex];
console.log(g);

// jeigu skaicius yra teigiamas, tai ji sumuojame su savimi;
// jeigu skaicius yra neigiamas, tai is jo atimame 10.

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const n = 7;
const ats2 = n > 0 ? sum(n, n) : diff(n, 10);

let ats = null;

if (n > 0) {
    ats = sum(n, n);
} else {
    ats = diff(n, 10);
}

console.log(ats);
console.log(ats2);

/*
Jeigu, tekstas yra trumpas (t.y. iki 5 simboliu),
tai grazink pirma simboli, priesingu atveju, grazink paskutini.
*/

const first = s => s[0];
const last = s => s.at(-1);
// const last = s => s[s.length - 1];

const text1 = 'Laba';
const strAts = text1.length < 5 ? first(text1) : last(text1);
console.log(strAts);

const funcToCall = text1.length < 5 ? first : last;
const strAts2 = funcToCall(text1);
console.log(funcToCall);
console.log(strAts2);

const jonasMarks = [];
const maryteMarks = [10, 2, 8, 4, 6];

function emptyMarksArray() {
    return 'Studentas neturi pazymiu, todel negalime apskaiciuoti jo pazymiu vidurkio.';
}

function marksAverage(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    const count = marks.length;
    const average = sum / count;
    return average;
}

const jonasFunc = jonasMarks.length === 0
    ? emptyMarksArray
    : marksAverage;
const jonasAverage = jonasFunc(jonasMarks);
console.log(jonasAverage);

const maryteFunc = maryteMarks.length === 0
    ? emptyMarksArray
    : marksAverage;
const maryteAverage = maryteFunc(maryteMarks);
console.log(maryteAverage);



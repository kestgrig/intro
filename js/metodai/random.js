console.log(Math.random());

function moneta() {
    if (Math.random() < 0.5) {
        // 0.5 - random generatorius
        return 'Skaicius';
    } else {
        return 'Herbas';
    }
}

for (let i = 0; i < 10; i++) {
    console.log(moneta());
}

const metimuKiekis = 90;
let herbai = 0;
for (let i = 0; i < metimuKiekis; i++) {
    const iskrito = moneta();
    if (iskrito === 'Herbas') {
        herbai++;
    }
    console.log(iskrito);
}

console.log('HERBU KIEKIS:', herbai);
console.log('SKAICIU KIEKIS:', metimuKiekis - herbai);

// automatizuota random funkcija(sugeneruoti atsitiktini index)

const week = ['Pirm', 'Antr', 'Trec', 'Ketv', 'Penkt', 'Sest', 'Sekm'];

for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * week.length); //zinoti atmintinai
    console.log(week[index]);
}

// Man reikia atsitiktinio skaiciaus intervale nuo 1 iki 10 imtinai

console.log("-------------------------------");

for (let i = 0; i < 10; i++) {

    console.log(Math.floor(Math.random() * 10) + 1); // 1 nes paslenki per viena kad neimtu 0, o prasidetu nuo 1
}

console.log("-------------------------------");

// Reikia atsitiktinio skaiciaus intervale nuo 23 iki 617 imtinai.

function numb(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(numb(23, 617));

console.log("-------------------------------");


for (let i = 0; i < 1; i++) {
    const max = 617;
    const min = 23;
    console.log(Math.floor(Math.random() * (max - min)) + min)
}



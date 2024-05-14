//.charAt - istraukia raides pozicija tekste

const word = 'Laba diena';

console.log(word);
console.log('Laba diena');

console.log(word[0]);
console.log('Laba diena'[0]);

console.log(word.charAt(0));
console.log('Laba diena'.charAt(0));

console.log(word.charCodeAt(0));
console.log(word.charCodeAt(1));
console.log(word.charCodeAt(2));
console.log(word.charCodeAt(3));
console.log(word.charCodeAt(4));

//.concat - prideda stringa prie esamo
console.log('Laba'.concat('diena'));
console.log('Laba'.concat('diena', 'Lietuva'));
console.log('Laba'.concat('diena').concat('Lietuva'));

// .includes() - iesko ar yra atitikmuo tekste


// .indexOf() - rasto teksto pradzia, pirmo rasto -1 (nera), 0 (1 reiksme), 1 (2reiksme) ir t.t


// .repeat() - kiek parasai tiek atkartoja kartu (tik skaiciai)



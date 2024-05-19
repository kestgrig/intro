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
// .endsWith() 
console.log('endsWith()');
console.log('Labas'.endsWith('x'));
console.log('Labas'.endsWith('gg'));
console.log('Labas'.endsWith('s'));
console.log('Labas'.endsWith('as'));
console.log('Labas'.endsWith('bas'));
console.log('Labas'.endsWith('abas'));
console.log('Labas'.endsWith('Labas'));
console.log('Labas'.endsWith('labas'));
// .startsWith() 
console.log('startsWith()');
console.log('Labas'.startsWith('x'));
console.log('Labas'.startsWith('gg'));
console.log('Labas'.startsWith('ggaafsghdn'));
console.log('Labas'.startsWith('l'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('La'));
console.log('Labas'.startsWith('Lab'));
console.log('Labas'.startsWith('Laba'));
console.log('Labas'.startsWith('Labas'));

// .includes() - iesko ar yra atitikmuo tekste
console.log('Pomidoras'.includes('x'));
console.log('Pomidoras'.includes('gg'));
console.log('Pomidoras'.includes('doras'));
console.log('Pomidoras'.includes('Pomi'));
console.log('Pomidoras'.includes('ido'));
console.log('Pomidoras'.includes('Pomidoras'));
console.log('Pomidoras'.includes('oda'));
console.log('Pomidoras'.includes('as'));
console.log('Pomidoras'.includes('sa'));

// .indexOf() - rasto teksto pradzia, pirmo rasto -1 (nera), 0 (1 reiksme), 1 (2reiksme) ir t.t
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('gg'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('m'));
console.log('Pomidoras'.indexOf('i'));
console.log('Pomidoras'.indexOf('Pom'));
console.log('Pomidoras'.indexOf('omi'));
console.log('Pomidoras'.indexOf('mido'));
console.log('Pomidoras'.indexOf('P', 1));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('o', 2));

// .repeat() - kiek parasai tiek atkartoja kartu (tik skaiciai)
console.log('A'.repeat(10));
console.log('Ū'.repeat(20));
console.log('Labas'.repeat(5));
console.log('Labas'.repeat(1));
console.log('Labas'.repeat(NaN));
console.log('Labas'.repeat(0));
console.log('Labas'.repeat(3.14));
console.log('Labas'.repeat(3.99999));

// .replace()
console.log('replace()');
console.log('Pomidoras'.replace('P', 'B'));
console.log('Pomidoras'.replace('o', 'x'));
console.log('Pomidoras'.replace('o', '-x-'));
console.log('Pomidoras'.replace('o', '_').replace('o', '_'));
console.log('Pomidoras'.replace('mido', 'ukuo'));
console.log('Pomidoras'.replace('AAAAA', 'BBBBBB'));

// .replaceAll()
console.log('replaceAll()');
console.log('Pomidoras'.replaceAll('o', '_'));
console.log('Aaaaaaaaa'.replaceAll('a', 'c'));

// .slice()
console.log('slice()');
console.log('Pyragelis'.slice());
console.log('Pyragelis'.slice(0));
console.log('Pyragelis'.slice(1));
console.log('Pyragelis'.slice(2));

const p = 'Vasara';

console.log(p.slice(-3));
console.log(p.slice(p.length - 3));

//           012345678
console.log('Pyragelis'.slice(-100));
console.log('Pyragelis'.slice(2, 4));
console.log('Pyragelis'.slice(2, 5));
console.log('Pyragelis'.slice(2, 6));

const dalis = 'Pyragelis'.slice(2, 100);
console.log(dalis, dalis.length);

console.log('25462548624862'.slice(2, 6));

console.clear();
console.log('-------------------');
console.log('split()');

const sakinys = 'Labas rytas, Lietuva!';
const zodziai1 = sakinys.split(' ');
console.log(zodziai1);
console.log(zodziai1[0]);
console.log(zodziai1[1]);
console.log(zodziai1[2]);

const dalys2 = 'asd'.split('asdd');
console.log(dalys2);

console.log('split()');

const sakinys2 = 'Labas rytas, Lietuva';
const zodziai = sakinys.split(' ');

console.log(zodziai);
console.log(zodziai[0]);
console.log(zodziai[1]);
console.log(zodziai[2]);

const sakinys3 = 'pomidoras';
const dalys = sakinys3.split('');
console.log(dalys);

const sakinys4 = ' ';
const dalys1 = sakinys4.split('');
console.log(dalys1);

// sakinys => tuscias / ne tuscias
// split => tuscias/ ne tuscias
// split => (ne)buvo kur kirpti)

console.log('---------------');
console.log('pomidoras'.toLowerCase());
console.log('pomidoras'.toUpperCase());

// \r - return
// \n - new line
// \t - tab


/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/
console.clear();
// \r - return
// \n - new line
// \t - tab

const HTML = '\
<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t</nav>\r\n\
</header>';

console.log(HTML);

const backtick = `Labas rytas, Lietuva!`;
console.log(backtick);

const backtick1 = `Backtikine (\`) kabute.`;
const backtick2 = 'Backtikine (`) kabute.';
const backtick3 = "Backtikine (`) kabute.";

const HTML2 = `<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>`;
console.log(HTML2);

//backtick

const a = 7;
const b = 10;
const c = a + b;

// 7 + 5 = 12
const ats1 = a + ' + ' + b + ' = ' + c;
console.log(ats1);
const ats2 = a + " + " + b + " = " + c;
console.log(ats2);
const ats3 = a + ` + ` + b + ` = ` + c;
console.log(ats3);

const start = 0;
const finish = 11;
const step = 3;
const answer = 4;

const mini1 = 'Skaiciu intervale tarp ' + start +
    ' ir ' + finish + ', besidalijanciu be liekanos is '
    + step + ' yra ' + answer + ' vienetai.';

console.log(mini1);

const mini2 = `Skaiciu intervale tarp ${start} ir ${finish},
besidalijanciu be liekanos is ${step} yra ${answer} vienetai.`;

console.log(mini2);

const gg = 'Good game!';
const number = 'Number: ' + answer;

console.log(mini1.length);
console.log(mini1[0]);


console.log('' + true);
console.log(true.toString());











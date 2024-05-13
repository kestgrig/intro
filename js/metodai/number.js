/*

*/
console.log('isFinite()');
console.log(Number.isFinite(158568));
console.log(Number.isFinite(-158568));
console.log(Number.isFinite(1585.68));
console.log(Number.isFinite(-15.8568));
console.log(Number.isFinite(0));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));

console.log('---------------');
console.log('isNaN()');

console.log(isNaN(158568));
console.log(isNaN(-158568));
console.log(isNaN(1585.68));
console.log(isNaN(-15.8568));
console.log(isNaN(0));
console.log(isNaN(Infinity));
console.log(isNaN(-Infinity));
console.log(isNaN(NaN));

console.log('---------------');

console.log('perseInt()');

const a = '88';
const b = parseInt('88');
console.log(typeof a);
console.log(typeof b);

console.log(parseInt('88'));
console.log(parseInt('-88'));
console.log(parseInt('0'));
console.log(parseInt('3.14'));
console.log(parseInt('-3.14'));
console.log(parseInt('NaN'));
console.log(parseInt('Infinity'));
console.log(parseInt('-Infinity'));
console.log(parseInt('Grybu karas'));
console.log(parseInt(''));
console.log(parseInt('123abc'));
console.log(parseInt('abc123'));
console.log(parseInt('123abc123bca'));
console.log(parseInt('abc123bca123'));
console.log(parseInt('1263e8'));
console.log(parseInt('1.23bca123'));

console.log('---------------');
console.log('perseFloat()');
const a1 = '88';
const b1 = parseFloat('88');


console.log(parseFloat('88'));
console.log(parseFloat('-88'));
console.log(parseFloat('0'));
console.log(parseFloat('3.14'));
console.log(parseFloat('-3.14'));
console.log(parseFloat('NaN'));
console.log(parseFloat('Infinity'));
console.log(parseFloat('-Infinity'));
console.log(parseFloat('Grybu karas'));
console.log(parseFloat(''));
console.log(parseFloat('123abc'));
console.log(parseFloat('abc123'));
console.log(parseFloat('123abc123bca'));
console.log(parseFloat('abc123bca123'));
console.log(parseFloat('12.3 eur'));
console.log(parseFloat('12.3abc12.3abc'));
console.log(parseFloat('usd 12.3'));
console.log(parseFloat('12523e5'));
console.log(parseFloat('1.252e5'));
console.log(parseFloat('7e5'));

console.log('---------------');
console.log('Number.toFixed()');

const c = 5.1561;

console.log(c);
console.log(c.toFixed(2));
console.log(parseFloat(c.toFixed(2))); //grazina atgal

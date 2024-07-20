const text = 'Laba diena';

console.log(text.repeat(3));

String.prototype.isUpperCase = function () {
    console.log(this);
    return;
}

text.isUpperCase();

String.prototype.isUpperCase = function () {
    const str = '' + this;
    return str === str.toUpperCase();
}

console.log('ABC'.isUpperCase());
console.log('aBC'.isUpperCase());
console.log('abc'.isUpperCase());

console.log(3.1415.toFixed(2));

Number.prototype.double = function () {
    return 5;
}

console.log((7).double());

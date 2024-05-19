/* Your classmates asked you to copy some paperwork for them.
You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need.
If n < 0 or m < 0 return 0.
*/
function paperwork(n, m) {
    const answer = n * m

    if (n < 0 || m < 0) {
        return 0
    }
    return answer;
}

console.log(paperwork(5, 5));

console.log('----------------------');

/* There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
Your task is to change the letters with diacritics:
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.
For example:
"Jędrzej Błądziński"  -- > "Jedrzej Bladzinski"
Test.assertEquals(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
Test.assertEquals(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
Test.assertEquals(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");

*/

function polish(string) {
    const polishAbc = 'ąćęłńóśźż';
    const normalAbc = 'acelnoszz';
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const letter = string[i];    //ę

        //kur sedi 'ę'? -> polishABC -> index 2
        let index = -1;
        for (let j = 0; j < polishAbc.length; j++) {
            const polishLetter = polishAbc[j];
            if (polishLetter === letter) {
                result += normalAbc[j];
                index = j;
            }
        }

        if (index === -1) {
            result += letter;
        }
    }

    return result;

}

console.log('Jędrzej Błądziński' + ' ' + '>>>' + ' ' + polish('Jędrzej Błądziński'));
console.log('Lech Wałęsa' + ' ' + '>>>' + ' ' + polish('Lech Wałęsa'));
console.log('Maria Skłodowska-Curie' + ' ' + '>>>' + ' ' + polish('Maria Skłodowska-Curie'));

console.log('----------------------');

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string / char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2)-- > output
// ('+', 4, 7)-- > 11
// ('-', 15, 18)-- > -3
// ('*', 5, 5)-- > 25
// ('/', 49, 7)-- > 7

function basicOp(operation, value1, value2) {
    let Op = '';
    if (operation === '/') {
        Op = value1 / value2;
    } else if (operation === '*') {
        Op = value1 * value2;
    } else if (operation === '+') {
        Op = value1 + value2;
    } else if (operation === '-') {
        Op = value1 - value2;
    }
    return Op;
}

console.log(basicOp('*', 10, 8));
console.log(basicOp('/', 70, 7));
console.log(basicOp('+', 5, 5));
console.log(basicOp('-', 5, 5));

// return '(' + operation + ', ' + value1 + ', ' + value2 + ')' + ' --> ' + Op;

console.log('-------------------------');

// Write a function that removes the spaces from the string, 
// then return the resultant string.

function noSpace(x) {

    return x.replaceAll(' ', '')
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

console.log('-------------------------');

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since
//  midnight in milliseconds.

function past(h, m, s) {
    let hour = h * 60 * 60 * 1000;
    let min = m * 60 * 1000;
    let sec = s * 1000;
    const total1 = hour + min + sec
    return total1
}
console.log(past(4, 20, 20))

console.log('-------------------------');


// Basic Training: Add item to an Array
// Add the value "codewars" to the websites array.
// After your code executes the websites array 
// should == ["codewars"]
// The websites array has already been defined for 
// you using the following code: var websites = [];

var websites = [];
websites.push("codewars");
console.log(websites);

console.log('-------------------------');

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
// For example n = 3 result in:
// "I\n I\n  I"
function drawStairs(n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result[i] = `${' '.repeat(i)}I`;
    }

    return result.join('\n');
}
console.log(drawStairs(7));

const drawStairs1 = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
console.log(drawStairs1(3));

console.log('-------------------------');

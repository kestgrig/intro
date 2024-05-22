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

// ['hello', 'world', 'this', 'is', 'great']  => 'hello world this is great'
// Write a function that takes an array of words and smashes
//  them together into a sentence and returns the sentence.
//  You can ignore any need to sanitize words or add punctuation,
//   but you should add spaces between each word.Be careful,
//    there shouldn't be a space at the beginning or the 
//    end of the sentence!

function smash([]) {
    return words1.join(' ');
};

console.log('-------------------------');

// If you can't sleep, just count sheep!!
// Given a non - negative integer, 3 for example, return a 
// string with a murmur: 
// "1 sheep...2 sheep...3 sheep...".Input will always be valid,
//  i.e.no negative integers.


function countSheep(num) {
    let sheepSum = '';
    for (let i = 1; i <= num; i++) {
        sheepSum += i.toString() + ' sheep...';
    }
    return sheepSum;
}

console.log(countSheep(4));

console.log('-------------------------');

// Grasshopper - Messi goals function
// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of
//  goals in all three leagues.

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    messigoalsSum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    return messigoalsSum;
}

console.log(goals(20, 30, 40))

console.log('-------------------------');

// Fix the Bugs(Syntax) - My First Kata
// Overview
// Hello, this is my first Kata so forgive me if it is of poor quality.
// In this Kata you should fix / create a program that returns the following values:
// false / False if either a or b(or both) are not numbers
// a % b plus b % a if both arguments are numbers
// You may assume the following:
// If a and b are both numbers, neither of a or b will be 0.

function myFirstKata(a, b) {
    if (typeof a != "number" || typeof (b) != "number") {
        return false;
    } else {
        return a % b + b % a;
    }
}

console.log(myFirstKata(3, 3))

console.log('<<< Powers of 2 >>>');

// Powers of 2
// Complete the function that takes a non - negative integer n
//  as input, and returns a list of all the
// powers of 2 with the exponent ranging from 0 to n(inclusive)

function powersOfTwo(n) {
    const numberCount = [];
    for (let i = 0; i <= n; i++) {
        numberCount.push(2 ** i);
    }
    return numberCount
}

console.log(powersOfTwo(5))
console.log()

console.log('<<< Training JS #1: create your first JS function and print >>>')
// "Hello World!"

/* Please refer to two example above and write 
yourfirst JS function.
 --mission 1: use keyword function 
 to define your function, function name should be 
 helloWorld(don't forget the () and {})
 --mission 2: use keyword var (or let or const) to 
 define a variable str, value of str should be a
 string: "Hello World!"(don't forget the =).
 --mission 3: type the console.log() in the next 
 line(don't forget to put the str in the parentheses).
 When you have finished the work, click "Run Tests" to 
 see if your code is working properly.
 In the end, click "Submit" to submit your code pass this kata.
*/

// function helloWorld() {
//     const str = "Hello World!";
//     console.log(str);
// }
function helloWorld() {
    const str = "Hello World!";
    return str
}
console.log(helloWorld())

console.log('-------------------------');
console.log('<<< A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future >>>');

// function yourFutureCareer() {
//     const career = Math.random();
//     if (career <= 0.32) {
//         return 'FrontEnd Developer';
//     } else if (career <= 0.65) {
//         return 'BackEnd Developer';
//     } else {
//         return 'Full-Stack Developer';
//     }

// }
function yourFutureCareer() {
    if (Math.random() < 0.32) {
        return 'FrontEnd Developer';
    } else if (Math.random() < 0.65) {
        return 'BackEnd Developer';
    } else {
        return 'Full-Stack Developer';
    }

}
console.log(yourFutureCareer())

console.log('-------------------------');

console.log('<<< Grasshopper - Summation >>>')

// Summation
// Write a program that finds the summation of every 
// number from 1 to num.The number will always be a 
// positive integer greater than 0. Your function only
//  needs to return the result, what is shown between 
//  parentheses in the example below is how you reach 
//  that result and it's not part of it, see the sample tests.
function summation(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

console.log(summation(8))

console.log('-------------------------');
console.log('<<< Opposite number >>>')
// Very simple, given a number (integer / decimal 
// both depending on the language), find its opposite
// (additive inverse).

function opposite(number) {
    result = number * (-1);
    return result;
}
console.log(opposite(-5));
console.log(opposite(50))

console.log('-------------------------');
console.log('<<< Triple Trouble >>>')
// Create a function that will return a string that combines
// all of the letters of the three inputed strings in groups.
// Taking the first letter of all of the inputs and grouping
//  them next to each other.Do this for every letter, see
//  example below!
// E.g.Input: "aa", "bb", "cc" => Output: "abcabc"

function tripleTrouble(one, two, three) {
    let sum = ''
    for (let i = 0; i < one.length; i++) {
        sum += one[i] + two[i] + three[i];
    }
    return sum
}
console.log(tripleTrouble('aaa', 'bbb', 'ccc'))

console.log('-------------------------');
console.log('<<< You Cant Code Under Pressure >>>')
// Code as fast as you can! You need to double 
// the integer and return it.

function doubleInteger(i) {
    result = i * 2;
    return result;
}

console.log('-------------------------');
console.log('<<< Is he gonna survive? >>>')
// A hero is on his way to the castle to complete his mission. 
// However, he's been told that the castle is surrounded with a 
// couple of powerful dragons! each dragon takes 2 bullets to be 
// defeated, our hero has no idea how many bullets he should carry.
// . Assuming he's gonna grab a specific given number of bullets 
// and move forward to fight another specific given number of dragons
// , will he survive?
// Return true if yes, false otherwise:)

function hero(bullets, dragons) {
    if (bullets >= dragons * 2) {
        return true;
    } else {
        return false;
    }
}
console.log(hero(100, 200));
console.log(hero(100, 20));

console.log('-------------------------');
console.log('<<< Will you make it ? >>>')
// You were camping with your friends far away from home, 
// but when it's time to go back, you realize that your fuel 
// is running out and the nearest pump is 50 miles away! You 
// know that on average, your car runs on about 25 miles per gallon. 
// There are 2 gallons left.
// Considering these factors, write a function that tells you if 
// it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

function zeroFuel(milesleft, mph, gallonsleft) {
    if ((mph * gallonsleft) >= milesleft) {
        return true;
    } else {
        return false;
    }
}
console.log(zeroFuel(100, 20, 2));
console.log(zeroFuel(10, 20, 2));

console.log('-------------------------');
console.log('<<< Convert a String to a Number! >>>')
// We need a function that can transform a string into a
// number.What ways of achieving this do you know ?

function stringToNumber(str) {
    result = Number(str);
    return result;
}

console.log(stringToNumber("1234"))


// ******************* Conversion *******************

/*
let myScore0 = "33"
console.log(typeof myScore0);
console.log(myScore0);

let convert0 = Number(myScore0)
console.log(typeof convert0);
console.log(convert0);
*/

// -------------------------------

// What if strings are like this

let myScore1 = "33abc" // Number - NaN
let myScore2 = undefined // Number - NaN
let myScore3 = null // Number - 0
let myScore4 = true // Number - 0/1
let myScore5 = "saqib" // Number - 0/1

/*
let convert = Number(myScore1) // "33abc"
console.log(typeof convert);
console.log(convert); // NaN -> Not a Number

convert = Number(myScore2) // undefined
console.log(typeof convert);
console.log(convert); // NaN

convert = Number(myScore3) // null
console.log(typeof convert);
console.log(convert); // 0

convert = Number(myScore4) // true/false
console.log(typeof convert);
console.log(convert); // flase -> 0 true -> 1

convert = Number(myScore5) // "saqib"
console.log(typeof convert);
console.log(convert); // NaN
*/


// "33" -> 33
// "33abc" -> NaN
// undefined -> NaN
// null -> 0
// true -> 1 false -> 0
// "saqib" -> NaN


// -------------------------------

/*
let isLoggedIn = 1
// let isLoggedIn = "" // false
// let isLoggedIn = "saqib" // true
// let isLoggedIn = undefined // false
// let isLoggedIn = null // false

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
*/

// -------------------------------

/*
let someNumber = 18
console.log(typeof (someNumber));
console.log(someNumber);

let stringNumber = String(someNumber)
console.log(typeof (stringNumber));
console.log(stringNumber);
*/

// ******************* Operations *******************

let value = 3
let negValue = -value
// console.log(negValue);

// -------------------------------

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // 2 raised to power 2
console.log(2/2);
console.log(2%2);
*/

// -------------------------------

/*
let str1 = "hello"
let str2 = " saqib"

let str3 = str1 + str2
console.log(str3);
*/

// -------------------------------

/*
// Problems
console.log("1" + "2"); // 12

console.log("1" + 2); // 12
console.log("1" + 2 + 2); // 122

console.log(1 + "2"); // 12
console.log(1 + 2 + "2"); // 32
*/

// -------------------------------

// console.log(3 + 4 * 5 % 6 / 7); // Never write this type of code, must use parenthesis so we could know what to solve first

// -------------------------------

/*
console.log(true);
console.log(+true);
// console.log(true+); // Error
console.log("");
console.log(+"");
*/

// -------------------------------

// Not Appreciated

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// -------------------------------

let gameCounter = 100
console.log(gameCounter); // 100

gameCounter++;
console.log(gameCounter); // 101

++gameCounter
console.log(gameCounter); // 102

console.log(gameCounter++); // Printed 102, Updated Value 103
console.log(gameCounter); // 103
console.log(++gameCounter); // 104

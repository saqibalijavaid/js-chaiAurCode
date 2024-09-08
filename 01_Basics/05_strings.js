// ******************* Strings (Prototypes) *******************

const name = "Saqib"
const repoCount = 50


// console.log(name + repoCount + " Value"); // Not Recommended

// String interpolation --- `` -> backticks (button on the left of 1)
console.log(`Hello, my name is ${name} and my repoCount is ${repoCount}`);

/*
******************* Task (To Learn String Prototypes) *******************

Run the below two lines in Browser Console, click enter and then click on arrow, you'll see the list of string prototypes, learn them

*************************************************************************
*/

// THERE ARE SOME PROPERTIES, TO USE THEM WE JUST NEED TO WRITE THEIR NAME AFTER DOT e.g. gameName.length
// BUT FOR FUNCTIONS WE ALSO PUT () AFTER PROPERTY/FUNCTION NAME e.g. gameName.toUpperCase()

const gameName = new String('Saqib-Ali-Javaid')
console.log(gameName);

console.log(gameName[0]);

// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2)); // which character is at position 2?
console.log(gameName.indexOf('q')); // At which index q is?

// In JavaScript, both substring() and slice() methods are used to extract parts of a string.
// In both, the character at ending index is not included

const newStr1 = gameName.substring(0, 5);
console.log(newStr1);

const newStr2 = gameName.slice(3, 8);
console.log(newStr2);

const newStr3 = gameName.slice(-5, 15); // In case
console.log(newStr3);

/*

substring:
- If indexStart is greater than indexEnd, substring swaps them.
- If either indexStart or indexEnd is less than 0, they are treated as 0.
- If indexEnd is omitted, it extracts characters to the end of the string.
- It does not accept negative indices; negative values are treated as 0.

slice:
- If beginIndex is greater than endIndex, slice returns an empty string.
- It allows negative indices, which count from the end of the string. For example, -1 is the last character, -2 is the second last, and so on.
- If endIndex is omitted, it extracts characters to the end of the string.

*/

const newStr4 = "   Saqib Ali  ";
console.log(newStr4);
console.log(newStr4.trim()); // Extra spaces removed from start and end
// We can also use trimStart or trimEnd only as well

// const url = "https://saqib ali javaid.com";
// If we enter a link like this the browser will automatically replace the space with %20

const url = "https://saqib%20ali%20javaid.com"; // only first %20 will be replaced
console.log(url.replace('%20','-'));

console.log(url.includes('saqib')); // does url string inclues this substring
console.log(url.includes('mujtaba'));

// String To Array
// We will split string on the bases of given argument i.e. '-'

const newStr5 = "Saqib-Ali-Javaid";
console.log(newStr5.split('-'));
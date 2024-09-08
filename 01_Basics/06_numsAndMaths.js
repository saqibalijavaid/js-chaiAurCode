// ******************* Numbers *******************

const score = 500
// console.log(score);

// Explicitly defining that balance is a Number
const balance = new Number(100)
// console.log(balance);

/*
******************* Task (To Learn Number Prototypes) *******************

Run the above two lines in Browser Console, click enter and then click on arrow, you'll see the list of Number prototypes, learn them

*************************************************************************
*/

// console.log(balance.toString());
// console.log(balance.toString().length); // Here it will act as string
// console.log(balance.toFixed(2)); // 100 -> 100.00

const otherNum = 2233.78966

// console.log(otherNum.toPrecision(5));
// console.log(otherNum.toPrecision(4));
// console.log(otherNum.toPrecision(3));

const hundreds = 10000000
// console.log(hundreds.toLocaleString());

/*
*************************************************************************

Enter Number. in browser Console, you'll get different options, We can also check maxValue and minValue in javascript from there

*************************************************************************
*/

// ******************* Maths *******************

console.log(Math);

// We can see its properties by using above line in Browser Console

// console.log(Math.abs(-4));
// console.log(Math.abs(4));

// We will get the number without decimal value
// console.log(Math.round(4.31));
// console.log(Math.round(4.67));

// if we want to choose either we need upper value or lower value

// console.log(Math.ceil(4.3));
// console.log(Math.ceil(4.7));

// console.log(Math.floor(4.3));
// console.log(Math.floor(4.7));

// To find lowest value in array
// console.log(Math.min(1, 5, 7, 10, 15));

// To find higest value in array
// console.log(Math.max(1, 5, 7, 10, 15));

// It will be used Most of the Time
// We will get 0 <= value <= 1
console.log(Math.random());

// Now Value will be between 0 and 10
console.log(Math.random()*10);

// And now Value will be between 1 and 11
console.log((Math.random() * 10) + 1);

// It will give only floor Value between 1 and 11
console.log(Math.floor(Math.random() * 10) + 1);

// If we want to generate a number between a specific range, we have a formula
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// ----------------------------------------------------------------------------------------------
// We have written random() func multiple times, it will generate different value for each of one
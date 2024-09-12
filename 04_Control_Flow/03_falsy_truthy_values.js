// ********* Truth values and False values *********

/*

********* Falsy Values *********
false, 0, -0, BigInt 0n, "", null, undefined, NaN

********* Truthy Values *********
"0", 'false', " ", [], {}, function(){}

*/

const userEmail = [];

if (userEmail) {
  console.log("Got user email"); // Will be executed
} else {
  console.log("Don't have user email");
}

// Better way to check whether array is empty or not
if (userEmail.length === 0) {
  console.log("Array is empty");
}

// How to check whether object is empty or not
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// ********* Nullish Coalescing Operator (??) --- null / undefined *********

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;
console.log(val1);

// ********* Ternary Operator *********

condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

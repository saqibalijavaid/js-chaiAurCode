/*
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); // output: error -> not defined
// console.log(b); // output: error -> not defined
console.log(c); // output: 30

// That's why coz of scope problems we don't use var

var d = 10;
e = 20; // same as that of var
if (true) {
  var d = 100;
  // if it's like this
  // d = 100
  // then the var d of global scope should update
  // but it's a new variable declaration i.e var d
  // it should not update gloabal var d

  e = 200;
}

console.log(d); // it should be 10, but due to scope problems with var, it will give output 100
console.log(e); // it should be 20, but due to scope problems, it will give output 200

*/

/*

let f = 10;
let g = 20;

if (true) {
  let f = 100;
  console.log("Inner: ", f); // output: 100 (Correct Output)

  g = 200; // not a new variable declaration
  // it's updating global let g, so it should update the value
}

console.log("Outer: ", f); // output: 10 (Correct Output)
console.log(g); // output: 200 (Correct Output)

*/

/*
- POINT TO REMEMBER
The SCOPE which we use in our code (code ehich we run through node .... command in terminal) is different than the scope we use in browser console.
Will Learn about it later
*/

// ************ Nested Scope ************

// In JS, Functions within function are allowed

function one() {
  const username = "Saqib";

  function two() {
    const website = "YouTube";
    console.log("Inside Two: ", username);
    console.log("Inside Two: ", website);
  }

  console.log("Inside one: ", username);
  //   console.log("Inside one: ", website); // Not Accessible

  two();
}

one();
// two(); // Not Accessible

if (true) {
  const username = "Ali's";

  if (true) {
    const website = " Laptop";
    console.log(username + website);
  }

  //   console.log(website); // Not Accessible
}

// console.log(username); // Not Accessible

// *************** Interesting Concept ***************

console.log(addOne(5)); // NO ERROR

function addOne(num) {
  return num + 1;
}

console.log(addOne(5));

// --------------------------------

// It's also a function but sometimes it's also called as "Expression"
// It's like a variable
// In JS, variables are very powerful, can hold anything

// console.log(addTwo(5)); // Error

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));

// The above thing is HOISTING CONCEPT (Will be discussed later)
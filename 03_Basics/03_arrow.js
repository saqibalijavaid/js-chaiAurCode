// ************** this **************

// ---------- Global Context ----------

// In Node.js, this refers to the global object in the module scope:
// console.log(this); // {}

// In a browser, this refers to window:
// console.log(this); // window

// ---------- Object Method ----------

// When a function is called as a method of an object, this refers to the object itself.
const user = {
  username: "Saqib",
  id: 18,

  // function as a method of 'user' object
  welcomeMessage: function () {
    // console.log(`${username}, Welcome to website!`); // Wrong Syntax
    // console.log(`${this.username}, Welcome to website!`); // this --- used for current context
    // console.log(this);
  },
};

user.welcomeMessage();

user.username = "Alee";
user.welcomeMessage();

// ---------- Function Context ----------

// Check Output
function chai() {
  console.log(this);
}

// chai(); // window (in browser) or global object (in Node.js)

// In the following way, 'this' can be used in objects but not in functions
function chai2() {
  let username = "Saqib";
  console.log(this.username); // output: undefined
}
// Another representation of function "chai2()"
// const chai2 = function () {
//   let username = "Saqib";
//   console.log(this.username);
// };

// chai2();

// ************** Arrow Function **************

/*
Traditional Function Expression:
const add = function(a, b) {
  return a + b;
};

Arrow Function:
const add = (a, b) => a + b;
const add = (a, b) => (a + b);

- Explicit Return (When we use return keyword) - as above
- Implicit Return (When we don't use return keyword)

{} --- write return keyword
() --- no    return keyword

*/

// ***** EXPLICIT RETURN *****

const chai3 = () => {
  let username = "Saqib";
  console.log(this);
  console.log(this.username);
};

// chai3();

// 1: () => {}
// 2: const addTwo = () => {}
// 3: const addTwo = (num1, num2) => {}

const add = (num1, num2) => {
  return num1 + num2;
};
// console.log(add(3, 4));

// ***** IMPLICIT RETURN *****

// Remove {} and return keyword
// const addTwo = (num1, num2) =>
//   num1 + num2;

// const addTwo = (num1, num2) => num1 + num2;
//      OR
const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(3, 4));

/*
const addTwo = (num1, num2) => num1 + num2;
      OR
const addTwo = (num1, num2) => (num1 + num2)

Among these two, the one wrapped in () is better, we can understand this thing with below example
*/

// - Function returning object

// const returnObj = () => {username: "Saqib"} // output: undefined
const returnObj = () => ({ username: "Saqib" }); // output: correctly object returned

// console.log(returnObj());

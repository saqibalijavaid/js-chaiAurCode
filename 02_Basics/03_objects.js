/*
Wanna master JS
Master OBJECTS and EVENTS

Ye 2 lines browser console me run kr k objects k saare methods dekhe ja sakte hai 

const obj1 = { 1: "a", 2: "b" };
obj1

---------------------------

Ways to declare objects
Through
- Constructor (Singleton ki tarha bane ga)
- Literals    (Singleton ki tarha nahi bane ga)
*/

// ********* Objects Literals *********

// In arrays, we have only values
// In objects, we have key as well for each value

const mySymbol1 = Symbol("key1");
const mySymbol2 = Symbol("key1");

const User = {
  name: "Saqib",
  "Full Name": "Saqib Ali Javaid",

  mySymbol1: "key1value", // Incorrect: 'mySymbol1' is treated as a string key
  [mySymbol2]: "key2value", // Correct: mySymbol2 is treated as a symbol key

  age: "18",
  location: "Lahore",
  email: "saqib@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

/*
******************** . Notation and [] Notation ********************

// We normally access object using . operator

console.log(User.name);
console.log(User.name, User.age);

// But there is another methoad also -> [] notation

// console.log(User[email]); // Wrong
console.log(User["email"]);

// "Full Name": "Saqib Ali Javaid"
// We can never access this Full Name using . operator
console.log(User["Full Name"]);

// In most cases we'll use . operator but in some specific cases we will have to use [] operator
*/

/*
******************** Symbol ********************

console.log(User.mySymbol1); // Output: "key1value" (accessing the string key)
console.log(User[mySymbol2]); // Output: "key2value" (accessing the symbol key)

console.log(typeof User.mySymbol1); // Output: string
console.log(typeof User[mySymbol2]); // Output: string (because the value is a string)

// To verify
console.log(User);

*/

/*
// Changing value
User.email = "saqib@yahoo.com";

// Now we cannot change values
Object.freeze(User);

// We will see no error but value will not be updated
User.email = "saqib@microsoft.com";

console.log(User);
*/

User.greeting = function () {
  console.log("Hello JS User!");
};

console.log(User.greeting);
/*
Output:
[Function (anonymous)]
*/
console.log(User.greeting());
/*
Output:
Hello JS User!
undefined
(we are using console.log(console.log()) thing thats why undefined coming)
*/
User.greeting();
/*
Output:
Hello JS User!
*/

User.greeting2 = function () {
  console.log(`Hello JS User, ${User.name}`);
  // OR
  // console.log(`Hello JS User, ${this.name}`);
};

User.greeting2();
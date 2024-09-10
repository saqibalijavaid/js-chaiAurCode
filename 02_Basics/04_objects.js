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

// ********* Objects Constructor *********

const User1 = new Object(); // using constructor -> Singleton Object
// const User2 = {}; // using literal -> Non-Singleton Object

// console.log(User1); // Output: {}
// console.log(User2); // Output: {}

User1.id = "123abc";
User1.name = "Saqib";
User1.isLoggedIn = false;

console.log(User1);
console.log(Object.keys(User1)); // we will get all the keys of User1 in array form, so we can perform array operations
console.log(Object.values(User1)); // we will get all the values of User1 in array form, so we can perform array operations

// Every Key with its Value will be in 1 array
console.log(Object.entries(User1));

// Kya user1 k pass ye property hai
console.log(User1.hasOwnProperty("isLoggedIn"));
console.log(User1.hasOwnProperty("isNotLoggedIn"));

// ******** object within object ********

const regularUser = {
  email: "saqib@gamil.com",

  // object within object
  fullName: {
    // object within object within object
    userFullName: {
      firstname: "Saqib",
      lastName: "Ali",
    },
  },
};

/*
console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName?.userFullName); // if exist --- will be discussed later
console.log(regularUser.fullName.userFullName.firstname);
*/

/*
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// same array wali problem, ye merge karne ki bajai object within object hojai ga
const obj3 = { obj1, obj2 };
console.log(obj3);


// ******** Merge ********

// const obj4 = Object.assign(target, source);
// const obj4 = Object.assign(target, source, source, source, source, ...);
// All the sources data is first assigned to target and then assignment operator comes in work

const obj4 = Object.assign(obj1, obj2);
console.log(obj4);

console.log(obj4 === obj1); // true  --- coz obj1 was target, all the values was first assign to obj1 and then to obj4
console.log(obj4 === obj2); // false --- coz obj2 was source, no value was assigned to it

const obj5 = Object.assign({}, obj1, obj2); // better to assign this way
console.log(obj5);

console.log(obj5 === obj1); // false --- coz obj1 was source, target is {} - null
console.log(obj5 === obj2); // false --- coz obj2 was source, target is {} - null

// Merge can be done through spread (...) operator

const obj6 = { ...obj1, ...obj2 };
console.log(obj6);

// MOSTLY SPREAD OPERATOR IS USED TO MERAGE
*/

/*
// ******** Array of Objects ********

// Mostly from database, values come in this syntax

const myUsersArr = [
  // obj1
  {
    id: 1,
    name: "saqib",
  },

  // obj2
  {
    id: 2,
    name: "ali",
  },

  // obj3
  {
    id: 3,
    name: "javaid",
  },
];

console.log(myUsersArr);
console.log(myUsersArr[0]);
console.log(myUsersArr[0].name);
*/

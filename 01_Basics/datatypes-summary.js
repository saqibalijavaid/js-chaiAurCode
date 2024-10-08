/*
    DataTypes:
    - Primitive (Call by value)
    - Non-Primitive (Reference Type)

    *** Prmitive ***
    -> 7 Categories
    - String
    - Number
    - Boolean
    - null
    - undefined
    - Symbol (To make any value -> unique)
    - BigInt

    *** Non-Prmitive (Reference) ***
    - Array
    - Objects
    - Functions

    Is javascript statically typed or dynamically typed?
    - Answer:
    JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

    For example, in JavaScript, you can do the following:

    let x = 10; // x is now a number
    x = "Hello"; // x is now a string
    x = true; // x is now a boolean
    On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

    Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

    int x = 10; // x is a variable of type int
    String name = "John"; // name is a variable of type String
    JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

*/

// ********************* Primitive *********************

// We do not specify the datatype, like in C++ we write
// int number = 4; or string str = "Saqib";

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// *** Symbol ***
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId); // false

console.log(typeof (id));

// As we have make id and anotherId unique, that's why even we are assigning same value to both, there comparison will give us false result (bcz of their uniqueness)

// *** BigInt ***
const bigNumber = 243224343254376875n
// writing 'n' in last, make it BigInt

console.log(typeof (bigNumber));

// ********************* Reference *********************

// - Array
// - Objects
// - Functions

// *** Array ***

const names = ["Saqib", "Ali", "Javaid"]

// *** Objects ***
{
    profileName: "Abdullah"
    age: 18
}

// OR

let myObj = {
    profileName: "Mujtaba",
    age: 20
}

// *** Functions ***

const myFunction = function()
{
    console.log("Hello World");
    
}

console.log(typeof (names));
console.log(typeof (myObj));
console.log(typeof (myFunction));


// https://262.ecma-international.org/5.1/#sec-11.4.3

/*

Type of val 	Result
-----------     ------
Undefined   	"undefined"
Null 	        "object"
Boolean 	    "boolean"
Number 	        "number"
String 	        "string"

// Symbol          "symbol"
// BigInt          "bigint"

// Array           "object"
// Object          "object"
// Function        "function (function object)"

Object (native and does not implement [[Call]]) 	    "object"
Object (native or host and does implement [[Call]]) 	"function"
Object (host and does not implement [[Call]])          	Implementation-defined except may not be "undefined", "boolean", "number", or "string".

*/

// ***************************************************************

/*
Memory:
    - Stack (Used for Primitive datatypes)
    - Heap  (Used for Non-Primitive datatypes)

    Primitive Types:
    1. Stored in stack.
    2. Passed or assigned by value (call by value).
    3. Changes to copies don't affect the original.

    Reference Types:
    1. Stored in heap, accessed via references (References are stored in stack).
    2. Changing the value through reference affects the original.
*/

let myName = "Saqib"

let anotherName = myName
console.log(anotherName);

anotherName = "Ali"

console.log(myName);
console.log(anotherName);

// Even we changed the value of anotherName, still the value of myname remained same

let userOne = {
    email: "user@gmail.com",
    nayapay: "user@nayapay"
}

let userTwo = userOne

userTwo.email = "saqib@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// Even we only changed the value for userTwo, but the value for userOne also get changed
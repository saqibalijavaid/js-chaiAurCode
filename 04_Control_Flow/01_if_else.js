// ****** If - else ******

const isUserloggedIn = true;
const temperature = 41;

if (temperature === 40) {
  console.log("Equal to 40");
} else {
  console.log("temperature is greater than or less than 40");
}
console.log("Execute");

// ****** Comparison Operators ******
// <, >, <=, >=, ==, !=, ===, !==

const score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);

const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2"); // Not a good Practice
// In above commented code, both the console.log() are within if scope coz ; is after the second console.log() but this is not appreciated (Not a good Coding Practice)

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

// ****** Logical Operators( && --- ||) ******
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}

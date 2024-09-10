function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("Q");
  console.log("I");
  console.log("B");
}

// sayMyName()

// parameters
function addTwoNumbers(num1, num2) {
  //   console.log(num1 + num2);

  //   let result = num1 + num2;
  //   return result;

  return num1 + num2;
}

// arguments
// addTwoNumbers(3, 4);
// addTwoNumbers(3, "4");
// addTwoNumbers(3, "A");
// addTwoNumbers(3, null);

const result = addTwoNumbers(3, 5);
// console.log(result);

// username = "sam" -> Default Value (if no argument is passed, sam will automatically be passed)
function logInUserMsg(username = "sam") {
  //   if (username === undefined) {
  if (!username) {
    console.log("Please enter a username!");
    return;
  }

  return `${username} just logged in!`;
}

console.log(logInUserMsg("Saqib"));
console.log(logInUserMsg(""));
console.log(logInUserMsg()); // undefined
// if console.log is within console.log, we will see undefined message

function calculateCartPrice(num1) {
  return num1;
}

console.log(calculateCartPrice(50));
console.log(calculateCartPrice(50, 200, 300, 400));

// if we don't know how many parameters will be passed

// ... -> Rest operator / Spread operator
// It depend upon its use that what we will say it

// In this case we will call it Rest Operator

function calculateCartPrice2(...num1) {
  return num1;
}

// This func will return as array

console.log(calculateCartPrice2(50));
console.log(calculateCartPrice2(50, 200, 300, 400));

function calculateCartPrice3(val1, val2, ...num1) {
  return num1;
}
console.log(calculateCartPrice3(50));
// val1 -> 50
// val2 -> 200
// ...num1 -> [300, 400]
console.log(calculateCartPrice3(50, 200, 300, 400));

// ******** Passing Objects in Functions ********

const user = {
  id: "19",
  username: "Saqib",
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and id is ${anyObject.id}`);
}

handleObject(user);
// OR
handleObject({
  username: "Ali",
  id: 20,
});

// ******** Passing Arrays in Functions ********

const myArray = [10, 20, 30, 40, 50];

function returnSecValue(getArray) {
  return getArray[1];
}

console.log(returnSecValue(myArray));
console.log(returnSecValue([5, 15, 25, 35, 45]));

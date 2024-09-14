// ******************************* for-of Loop *******************************

// ******** for-of loop over array ********

const myArray = [1, 2, 3, 4, 5];

for (const arr of myArray) {
  //   console.log(arr);
}

// ******** for-of loop over string ********

const greetings = "Hello world!";
for (const greet of greetings) {
  //   console.log(`Character is ${greet}`);
}

// ******** for-of loop over map ********

// Keep data in order
// Koi bhi element repeat ni hota (Contain unique data)

const mpp = new Map();

mpp.set("Pk", "Pakistan");
mpp.set("In", "India");
mpp.set("Fr", "France");
mpp.set("In", "India"); // pehle aa chuka hai to ye dobara map me add nai hoga

// console.log(mpp);

for (const i of mpp) {
  //   console.log(i); // Each key-value pair will be accessed as array
}

// console.log("Key : Value");
// console.log("-----------");
for (const [i, j] of mpp) {
  //   console.log(i, ": ", j);
}

// ******** for-of loop over object ********

// for-of LOOP IS NOT ITERABLE OVER OBJECT

const myObject = {
  game1: "pubg",
  game2: "gta",
  game3: "tekken",
};

for (const [key, value] of myObject) {
  //   console.log(key, ":-", value); // ERROR
}

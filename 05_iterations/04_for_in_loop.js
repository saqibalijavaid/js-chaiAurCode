// ******************************* for-in Loop *******************************

// ******** for-in loop over array ********

const programming = ["js", "rb", "py", "java", "cpp"];

for (const i in programming) {
  //   console.log(i);
  //   console.log(programming[i]);
}

// ******** for-in loop over map ********

const map = new Map();

// Keep data in order
// Koi bhi element repeat ni hota (Contain unique data)

// for-of LOOP IS NOT ITERABLE OVER Map

const mpp = new Map();

mpp.set("Pk", "Pakistan");
mpp.set("In", "India");
mpp.set("Fr", "France");
mpp.set("In", "India"); // pehle aa chuka hai to ye dobara map me add nai hoga

for (const i in mpp) {
  //   console.log(i); // No OutPut
}
for (const [i, j] of mpp) {
  //   console.log(i, ": ", j); // Give Output
}

// ******** for-in loop over object ********

const myObject = {
  game1: "pubg",
  game2: "gta",
  game3: "tekken",
};

for (const key in myObject) {
//   console.log(`${key} :  ${myObject[key]}`);
}

const myArr1 = [10, 20, 30, 40 ,50,60];
const myArr2 = ["Saqib", 18, 12, 2004, true];
const myArr3 = new Array(5, 15, 25, 35, 45);

// console.log(myArr1[0]);

// Run these lines in browser to see Array Prototypes
// const myArr1 = [10, 20, 30, 40, 50];
// myArr1

// Array Methods

// myArr1.push(70);
// myArr1.push(80);
// console.log(myArr1);
// myArr1.pop();
// console.log(myArr1);

// myArr1.unshift(0); // Add the value in start
// console.log(myArr1);
// myArr1.shift(); // Remove from start
// console.log(myArr1);

// console.log(myArr1.includes(20));
// console.log(myArr1.includes(0));
// console.log(myArr1.indexOf(20));
// console.log(myArr1.indexOf(0));

// const newArr = myArr1.join()

// console.log(myArr1);
// console.log(newArr); // string
// console.log(typeof (newArr));

console.log("A ", myArr1);

// *** Slice ***
// The elements copied to new array remained same in original array

const myNewArr1 = myArr1.slice(1,3) // 3rd not included

console.log("B ", myArr1);
console.log(myNewArr1);

// *** Splice ***
// The elements copied to new array get deleted from original array

const myNewArr2 = myArr1.splice(1,3) // 3rd included?

console.log("C ", myArr1);
console.log(myNewArr1);
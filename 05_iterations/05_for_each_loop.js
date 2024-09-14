// ******************************* for-each Loop *******************************

// for-each loop is the method of array
// A function that accepts up to three arguments.
// forEach calls the "callbackfn" function one time for each element in the array.
// Performs the specified action for each element in an array.

const coding = ["js", "rb", "py", "java", "cpp"];

/* 
coding.forEach(Write parameters here)
- As forEach function accepts callBack function as parameter so we need to write a callBack function
- How to write a callBack function?

Traditional function:
function nameOfFunction () { }

callBack function:
- Remove function name
  function () {}
- We want to execute this function for array elements so let's say i give the name 'items' to array elemet, it will be passed to the callBack function as parameter
  function (items) {}

We will write this callBack function as the parameter of forEach()
*/

coding.forEach(function (val) {
  // console.log(val);
});

// ******** Write callBack function as Arrow function ********
coding.forEach((item) => {
  // console.log(item);
});

// We can first simply write a function then pass it to forEach parameter
function printMe(item) {
  console.log(item);
}
// coding.forEach(printMe);
/* Remember in forEach parameter, we are passing printMe reference, we are not calling it
Passing reference: printMe
Calling function: printMe()
*/

// Passing all the THREE parameters
coding.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
  //   console.log(arr, index, item);
});

// ******** for-in loop over array of objects ********
// ******** MOST IMPORTANT ********

// ["", "", ""] // Array
// [{}, {}, {}] // Array of objects

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

// console.log(myCoding);

myCoding.forEach((item) => {
//   console.log(item.languageName);
});

myCoding.forEach((item) => {
//   console.log(item.languageFileName);
});

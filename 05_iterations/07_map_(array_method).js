// ******************************* MAP METHOD *******************************

// In filter, we usually pass conditions which give use true or false result. If we want to do some operations, we'll have to use map method

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNumbers.map((num) => {
  return num + 10;
});

// console.log(newNums);

// ******** Chaining ********

newNums = myNumbers
  .map((num) => num * 10) // it will operate on myNumbers[] --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .map((num) => num + 1) // it will operate on values returned by 1st map  --> [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  .filter((num) => num >= 40); // it will operate on values returned by 2nd map ---> [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]

console.log(newNums); // Final output: [41, 51, 61, 71, 81, 91, 101]

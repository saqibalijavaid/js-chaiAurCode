// ******************************* REDUCE METHOD *******************************

/*

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

const initialValue = 0;

const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

// In 1st step, the value of initialValue will be assigned to accumulator
// After that, the sum of (accumulator + currentValue) will be assigned to accumulator

console.log(sumWithInitial);
// Expected output: 10

*/

// {} --> We need to write "return" keyword for returning something
// () --> No need to write "return" keyword for returning something

const myNums = [1, 2, 3, 4, 5, 6, 7];

let myTotal1 = myNums.reduce(function (acc, currVal) {
  //   console.log(`acc: ${acc} and currVal: ${currVal}`);
  return acc + currVal;
}, 0);

// console.log(myTotal1);

// Using Arrow Function
let myTotal2 = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal2);

// Learn reduce method using below example
const shoppingCart = [
  {
    itemName: "JS Course",
    price: 999,
  },
  {
    itemName: "Python Course",
    price: 1999,
  },
  {
    itemName: "Mobile Dev Course",
    price: 2999,
  },
  {
    itemName: "DSA Course",
    price: 3999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

// console.log(priceToPay);

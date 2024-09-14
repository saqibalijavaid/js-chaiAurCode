// ******************************* FILTER METHOD *******************************

// In filter, we usually pass conditions which give use true or false result. If we want to do some operations, we'll have to use map method

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  //   console.log(item);
  return item;
});

// console.log(values); // undefined (forEach does not return us anything)

// ******** So if we want to return data, we use filter method instead of forEach ********

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums1 = myNums.filter((num) => {
  return num > 4;
});

console.log(newNums1);

// If we want to do the same thing using forEach loop
const newNums2 = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums2.push(num);
  }
});

console.log(newNums2);

// Learn filter method using below example
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");
// console.log(userBooks);

userBooks = books.filter((bk) => {
  return bk.publish >= 1995;
});
// console.log(userBooks);

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
// console.log(userBooks);

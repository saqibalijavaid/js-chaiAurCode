// ************************ Dates ************************

let myDate = new Date();

console.log(typeof myDate); // Date -> Object

/*
console.log(myDate); // Not Understandable  // 2024-09-09T07:37:36.308Z

console.log(myDate.toString());             // Mon Sep 09 2024 12:37:36 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toDateString());         // Mon Sep 09 2024
console.log(myDate.toISOString());          // 2024-09-09T07:37:36.308Z
console.log(myDate.toJSON());               // 2024-09-09T07:37:36.308Z
console.log(myDate.toLocaleDateString());   // 9/9/2024
console.log(myDate.toLocaleString());       // 9/9/2024, 12:37:36 PM
*/

// ********** Creating our own Date **********

/*

// In JS, months start from 0 and end at 11 (must try -ve values and values greater than 11)
// let myCreatedDate = new Date(Year, Month, Date);

let myCreatedDate1 = new Date(2004, 11, 18);
console.log(myCreatedDate1);
console.log(myCreatedDate1.toDateString());

// We can give more values in Constructor as well

let myCreatedDate2 = new Date(2004, 11, 18, 5, 3);
console.log(myCreatedDate2);
console.log(myCreatedDate2.toLocaleString());

// In this case, the months range from 1 to 12, and in case of out of range values it will be showing us Invalid Date.
// YY-MM-DD
let myCreatedDate3 = new Date("2004-12-18");
console.log(myCreatedDate3);
console.log(myCreatedDate3.toLocaleString());

// MM-DD-YY
let myCreatedDate4 = new Date("12-18-2004");
console.log(myCreatedDate4);
console.log(myCreatedDate4.toLocaleString());

*/

// ************************ Time ************************

let myCreatedDate4 = new Date("12-18-2023");
let myTimeStamp = Date.now();

// console.log(myCreatedDate4);
// console.log(myCreatedDate4.toLocaleString());

console.log(myCreatedDate4.getTime()); // millie sec value from Jan 1, 1970 to given Date
console.log(myTimeStamp); // millie sec value from Jan 1, 1970 to current time

// Converting millisec to sec
console.log(Date.now() / 1000); // may give decimal values
console.log(Math.floor(Date.now() / 1000));

// We just want to know specific thing from date i.e. month or year
// We don't want to convert date to string or in anything else

let newDate = new Date();
console.log(newDate);

console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); // Monday, Tuesday, ...

// string interpolation using backticks
console.log(
  `The date is ${newDate.getDate()} and the year is ${newDate.getFullYear()}\n`
);

// For more customization
// newDate.toLocaleString('default', {})

let formattedDate = newDate.toLocaleString("default", {
  // click ctrl + space
  weekday: "long",
  minute: "numeric",
  timeZoneName: "long",
  year: "numeric",
});

console.log(formattedDate);
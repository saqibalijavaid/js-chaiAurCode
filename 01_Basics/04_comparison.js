/*
console.log(5 > 1);
console.log(5 >= 1);
console.log(5 < 1);
console.log(5 <= 1);
console.log(5 == 1);
console.log(5 != 1);
*/

// Problem arise when we compare different datatypes
// Avoid comparing different datatypes coz we sometimes don't get predictable result

// console.log("2" > 1); // "2" Automatically converted to Number
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// These unpredictable results are because of value conversion
// Sometimes it converts to NaN, and sometimes to 0

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false


// In JS, the way to treat comparison and equality check such as in == and >= are different

// strict check -> ===
// With value, it also check datatype

console.log("1" == 1);  // True
console.log("1" === 1); // False
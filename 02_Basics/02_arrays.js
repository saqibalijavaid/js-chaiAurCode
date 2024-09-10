const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

/*
marvelHeroes.push(dcHeroes);

// humein laga k dono arrays merge ho jain ge lekin aesa ni hai, is case me array k andar array aa jai ga
console.log(marvelHeroes);
// array apne andar as array data bhi le sakte hai
console.log(marvelHeroes.length); // 4

console.log(marvelHeroes[3]);
console.log(marvelHeroes[3][1]);
*/

/*
// is case me dono arrays ko merge ho jain gi lekin new array bana kr store karana pare ga
const allHeroes1 = marvelHeroes.concat(dcHeroes);
console.log(allHeroes1);

// easy alternative of concat()
// we can merger multiple arrays using "spread -> ..." operator
const allHeroes2 = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes2);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// In flat prototype, hame depth deni hoti hai k kis depth tak flat karna hai
const usableAnotherArray1 = anotherArray.flat(Infinity);
const usableAnotherArray2 = anotherArray.flat(3);

console.log(usableAnotherArray1);
console.log(usableAnotherArray2);
*/

// ****** Used in Data Scraping ******

console.log(Array.isArray("Saqib")); // false
// convert data to array
console.log(Array.from("Saqib"));
// This cannot be directly converted -> Key --- Value
console.log(Array.from({ name: "Saqib" })); // INTERSTING CASE
// We need to tel what to convert to array (key or value)

let score1 = 100
let score2 = 200
let score3 = 300
// convert data to array
console.log(Array.of(score1,score2,score3));
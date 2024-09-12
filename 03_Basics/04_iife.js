// Immediately Invoked Function Expression (IIFE)

// Traditional Function
function chai1() {
  console.log(`DB Connected 1`);
}

chai1();

/*
*** IIFE ***
Why we use this?
Ans: Global Scope k pollution se bachne k liye

- Wrap the whole function in ()
- Put () in the end for execution

()()

** In case of writing two IIFE, use ; at the end of function to tell the iife where the context is ending **

*/

(function chai2() {
  console.log(`DB Connected 2`);
})(); // Remove this ; we will face error

// --- Arrow Function as IIFE ---

(() => {
  console.log(`DB Connected 3`);
})();

((name) => {
  console.log(`DB Connected 4, ${name}`);
})("Saqib");

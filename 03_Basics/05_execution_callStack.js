/* ********* VERY IMPORTANT FOR INTERVIEW PRESPECTIVE *********

- Javascript is single threaded

-> Javascript Execution Context
    - Global Execution Context (Browser aur doosre environments ka global execution context alag hota hai)
    - Functional Execution Context
    - Eval Execution Context (Property of Global Object, abhi isse karne ki zaroorat nii)

-> JavaScript Execute Code in 2 phases:
    - Creation Phase / Memory Creation Phase
    - Execution Phase

*/

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(7, 3);

/*
    1-> Global Execution (this) (Ye hamesha bane ga hi bane ga)
    2-> Memory Creation Phase (Variables ko akatha kar k apne pass rakha jata hai)
        val1 --> undefined
        val2 --> undefined
        addNum() --> definition
        result1 = undefined
        result2 = undefined
    3-> Execution Phase
        val1 <-- 10
        val2 <-- 5
        addNum() --> execution k liye kuch hai ee nai
        
        *** Jitni dafa function call hogi, utni dafa us function k liye Memory aur Execution phase run hon ge ***
        function addNum(num1, num2) {
            let total = num1 + num2;
            return total;
        }


        result1 = addNum --> New Variable Environment + Execution Thread
        |- Memory Phase
                        val1/num1 -> undefined
                        val2/num2 -> undefined
                        total -> undefined
        |- Execution Phase
                        num1 -> 10
                        num1 -> 5
                        total -> 15

        result1 = 15

        *** is k baad ye wala global execution context delete ho jai ga ***
        
        result2 = addNum --> New Variable Environment + Execution Thread
        |- Memory Phase
                        7 k liye memory ban jai gi/num1 -> undefined
                        3 k liye memory ban jai gi/num2 -> undefined
                        total -> undefined
        |- Execution Phase
                        num1 -> 7
                        num1 -> 3
                        num1 -> 10

        result2 = 10

        *** is k baad ye wala global execution context delete ho jai ga ***


        *** Last pr poore program wala gloabal execution context bhi del ho jai ga ***
*/

// ************ CALL STACK ************

// Function memory me kis tarha jain ge, kis tarha bahir aaye ge

// Follow LIFO order

// Try "Call Stack" in the Sources tab of Developer mode of Browser
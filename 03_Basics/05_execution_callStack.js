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
// Follow LIFO order (Stack)

// Try "Call Stack" in browser.

/*
***************** Procedure in Firefox Developer Tools *****************
Open Developer Tools:
Right-click on a webpage (new tab) and choose Inspect.

Write a JavaScript Code Snippet:

In the Console tab, you can write the following sample JavaScript code to test the call stack:

// function firstFunction() {
//     secondFunction();
// }

// function secondFunction() {
//     thirdFunction();
// }

// function thirdFunction() {
//     console.log("Call stack demo");
//     debugger; // Pauses execution here to inspect the call stack
// }

// firstFunction();

Run the Code:
After writing the code in the Console, press Enter to execute it.
The debugger statement will pause execution, and Firefox will automatically switch to the Debugger tab.

Inspect the Call Stack:
In the Debugger tab, look at the Call Stack section on the right.
You will see the list of functions called up to the point where the execution was paused (e.g., thirdFunction, secondFunction, firstFunction).

Step Through the Code:
Use the following buttons to explore the flow of execution:
Step Over (F10): Executes the next line in the current function.
Step Into (F11): Jumps into the function being called.
Step Out (Shift + F11): Jumps back to the caller function.
As you step through, observe how the Call Stack changes, adding and removing function calls.



***************** Procedure in Microsoft Edge Developer Tools *****************

Open Developer Tools:

Press F12 or Ctrl + Shift + I (Windows/Linux) to open Developer Tools, or right-click on a webpage and choose Inspect.
Navigate to the Sources Tab:

In the Developer Tools panel, click on the Sources tab at the top.
This is where you'll be able to create and manage JavaScript code snippets.
Create a New Snippet:

In the Sources tab, on the left-hand side, you will see a file tree structure. Look for the Snippets section. If you don't see it:
Click on the double arrow (»), then choose Snippets from the dropdown.
Right-click on the Snippets folder and choose New to create a new snippet.
Name your snippet (for example, callStackTest).
Write JavaScript Code in the Snippet:

In the newly created snippet, write the following JavaScript code to demonstrate how the Call Stack works:

javascript
Copy code
function firstFunction() {
    secondFunction();
}

function secondFunction() {
    thirdFunction();
}

function thirdFunction() {
    console.log("Call stack demo");
    debugger; // Pauses execution to inspect the call stack
}

firstFunction();
Run the Snippet:

Right-click the snippet name (in the left-hand pane) and select Run.
Alternatively, press the Play button (▶) at the bottom of the snippet editor to execute the code.
Check the Call Stack:

Once the debugger; statement is hit, execution will pause automatically.
The Debugger panel will now show the Call Stack on the right-hand side.
In the Call Stack section, you will see the list of functions leading up to the pause point, like:
thirdFunction
secondFunction
firstFunction
Step Through the Code:

While paused at the debugger; statement, you can now use the step controls to navigate through the code:
Step Over (F10): Move to the next line in the current function.
Step Into (F11): Enter the called function.
Step Out (Shift + F11): Return to the calling function.
As you step through, you’ll see the Call Stack updating to reflect the current state of function calls.
Observe the Call Stack Behavior:

Each time you step into or out of a function, the call stack grows or shrinks accordingly, showing how function calls are managed.


***************** Additional Tips for Both Browsers *****************

Breakpoints: You can add breakpoints in your code by clicking on the line numbers in the Sources/Debugger tab. The code will pause execution at the breakpoint, allowing you to inspect the call stack at any point.
Call Stack Depth: As you call more nested functions, the Call Stack grows. Once a function returns, it is popped off the stack.

This approach should give you a thorough understanding of how the Call Stack works in both browsers.

*/

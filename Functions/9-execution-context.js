//!When we run any javascript code,then special environment is created to handle the transformation and execution of the code.This is called as the execution context.
//!It contains currently running code and everything that aids in its execution.
//!There is global execution context as well as function execution context for every function invoked.

//!Execution context phases:

//!Memory creation phase:
//! 1) Create global object(browser = Window, Node.js = Global)
//! 2)Create the 'this' object and bind it to global object.
//! 3)Setup memory heap for storing variables and function references.
// !4) Store functions and variables in global execution context and set it to undefined.

//!Execution Phase
//! 1)It executes the code line-by-line
//! 2)Create a new execution context in each function call.

let x= 100;
let y = 50;
function getSum(n1,n2){
    let sum = n1+n2;
    return sum;
}
let sum1 = getSum(x,y);
let sum2 = getSum(10,21);
console.log(sum1,sum2);
//!In above function,
//!In memory creation phase,
//!Line-1:variable x gets allocated to memory and sets to undefined.
//!line-2:Variable y gets allocated to memory and sets to undefined
//!Line-3:getSum gets allocated to memory and all code puts to memory
//!sum1 variable allocated to memory and stores as undefined.
//!sum2 variable allocated to memory and stores as undefined.

//!In execution context phase,
//!Places the value of 100 into x variable
//!Places the value of 50 to y variable
//!Skips the function because nothing to execute.
//!Invokes getSum() function and creates new function execution context.

//!Now in function execution context as well,there is going to be 2 phases that is memory creation phase and executng context  phase.

//!Memory creation phase:
//!Variable n1 gets allocated to memory and sets as undefined.
//!Variable n2 gets allocated to memory and sets as undefined.
//!Variable sum gets allocated to memory and sets as undefined.
//!Execution context phase:
//!n1 & n2 assigned 100 and 50
//!Now calculations are performed and putted resulting value into sum variable.
//!return tells the function to go into globalExecutionContext with value 150 in sum.
//!Sum value that is returned put into sum1 variable.

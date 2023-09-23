// Function declaration
function addDollarSign(value){
    return '$' + value;
}
console.log(addDollarSign(10));

//! Hoisting is the process of moving function/variable declaration to top of the  code before code is executed

//!In function expression, hoisting is not supported 
const addPlusSign = function(value){
    return '$' + value;
}
console.log(addPlusSign(200));

// !Function with no parameters
function sayHello(){
    console.log("Hello World");
}
sayHello();

//!Functions with parameters
//!When we are declaring functions and putting variables in it,then it is parameters.
//!When we calling a function and variables we write there,then these are arguements.

function add(num1,num2){
    console.log(num1+num2);
}
add(4,5);

function sub(num1,num2){
    return num1 - num2;
}
const substractionOfNumbers = sub(10,2);
console.log(substractionOfNumbers);
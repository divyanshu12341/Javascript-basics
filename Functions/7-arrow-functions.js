//!Normal function
function add(a,b){
    return a+b;
}
console.log(add(1,2));
//!Arrow function 
// !For only one line expression,it automatically returns the value.We do not need to explicitly write the return keyword.
const substractionOfNumbers = (a,b) => a-b;
console.log(substractionOfNumbers(10,20));

//!In case of only one parameter,parenthesis in case of parameters is not necessary.
const doubleOfNumber = a=>a*2;
console.log(doubleOfNumber(7));

//!Returning an object here
//!For returning an object,we need to surround object with parenthesis
const objReturn = () =>({
    firstName:'Divyanshu',
    lastName:'Jain',
    age:23
});
console.log(objReturn());

//!Using arrow function is efficient in case of loops
const numbers = [1,2,3,4,5,6];
numbers.forEach((n)=>console.log(n));

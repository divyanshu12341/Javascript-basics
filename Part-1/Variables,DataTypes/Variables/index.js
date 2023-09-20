//Ways to declare a variable
//var,let and const

let firstName = "Divyanshu";
let lastName = "Jain";

console.log(firstName, lastName);

let age = 30;
console.log(age);

//Naming conventions
// -Cannot start with number
// Only letters,numbers,underscore and dollar signs

//multiWord formatting
//firstName = camelCase
//first_name = snakeCase
//FirstName = pascalCase

//Re-assigning variables
age = 31;
console.log(age);

//declare it and not assign any value
let score;
console.log(score);
score = 1;
console.log(score);
if (true) {
  score = score + 1;
}
console.log(score);

//with const 
// const x = 1;
// x = 2; //wrong

// const x; //wrong

const arr = [1,2,3,4];
// arr = [1,2,3,4,5]; wrong

//We can do it that way
arr.push(5);
console.log(arr);

//Same can be done for object
 const person = {
    name:"Divyanshu"
 };
 person.name = "Vansh";
 console.log(person);

 //Declare multiple values at once 
 let a,b,c;
 const d=10,e=20,f=30;
 console.log(a,b,c,d,e,f);
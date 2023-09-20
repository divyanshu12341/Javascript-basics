//String 
const firstName = "Divyanshu";

//Number
const age = 30;
const temp = 98.8;

//Boolean
const hasKids = true;

//Null
const aptNumber = null;

//Undefined 
let score;

//Symbol
const id = Symbol('id');

//bigInt
const n = 12345678901234567890n;
console.log(firstName);
console.log("Type of firstName is ",typeof(firstName));
console.log("Type of age and temp is ",typeof(age),typeof(temp));
console.log("Type of hasKids is ",typeof(hasKids));
console.log("Type of aptNumber is ",typeof(aptNumber));
console.log("Type of score is ",typeof(score));
console.log("Type of id is ",typeof(id));
console.log("n is ",n);
console.log("type of n is ",typeof(n));

//Reference types 

//Arrays
const numbers = [1,2,3,4];
console.log("Types of numbers is ",typeof(numbers));
console.log("Numbers is ",numbers);

//Objects 
const person = {
    name:'Divyanshu'
}
console.log("Value as well as data type of person is ",person,typeof(person));

//Function 
function sayHello(){
    console.log("Hello");
}
//Function is also an object and it is considered as function object
console.log(typeof sayHello);


//Reference data-types 
const persons = {
    name:'Divyanshu Jain',
    age:30
}
const newPerson = persons;
//As it is referencing to a heap memory,both names will be change 
newPerson.name = 'John';
console.log(newPerson);
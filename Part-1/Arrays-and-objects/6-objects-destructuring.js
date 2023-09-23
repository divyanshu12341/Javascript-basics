//!Objects with keys and values are same.Tnen not needed to add both.

const firstName = 'Divyanshu';
const lastName = 'Jain';
const age = 23;

const person = {
    firstName,
    lastName,
    age
}
console.log(person);

//!Destructuring of objects 
const todo = {
    id:1,
    title:'Take out trash',
    user:{
        name:'Divyanshu Jain'
    }
}

//!We can destructure /extract properties from objects 
//!We can also rename properties below id got renamed to todoId
const {id:todoId,title,user:{name}} = todo;
console.log(todoId,title,name);

//!Destructuring of arrays
const numbers = [23,67,33,49];
const [firstValue,secondValue] = numbers;
console.log(firstValue,secondValue);

//!Rest operator
const [first,second,...restValues] = numbers;
console.log(first,second,restValues);
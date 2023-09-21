//Arrays are special type of object and data structure in javascript and can store multiple values.

//  Array literals
const numbers = [12,45,33,29,39];
console.log(numbers);
console.log(typeof numbers);
//Array constructor 
const fruits = new Array('apple','grapes','orange');
console.log(fruits);
console.log(typeof fruits);

//Accessing elements in an array
const firstElementInNumbersArray = numbers[0];
const sumOfElementsInNumbersArray = numbers[0] + numbers[2];
console.log(`First element in numbers array is ${firstElementInNumbersArray}`);
console.log(`Sum of elements in numbers array is ${sumOfElementsInNumbersArray}`);
console.log(`My favourite fruit is an ${fruits[1]}`);

//Length of elements in an array
const lengthOfNumbersArray = numbers.length;
console.log(`Length of numbers array is ${lengthOfNumbersArray}`);

//Changing elements of an array
numbers[2] = 100;
fruits[1] = 'Banana';
console.log(fruits);

//Adding element to end of an array
fruits[fruits.length] = 'Papaya';
console.log(fruits);
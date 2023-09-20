//explicitly converting data types from one data type to another 

//string to number
let amount = '100';

//1st way of converting string to number
amount = parseInt(amount);

//2nd way to convert string to number 
amount =+ amount;

//3rd way to convert string to number 
amount = Number(amount);
console.log(amount,typeof amount);    

//Number to string
let amount1 = 100;

//1st way to convert number to string
amount1 = amount1.toString();

//2nd way to convert number to string
amount1 = String(amount1);
console.log(`Type of amount1 is ${typeof(amount1)}`);

//For converting floating number string,we use parseFloat
let amount2 = '99.5';
amount2 = parseFloat(amount2);
console.log(`Type of amount2 is ${typeof(amount2)}`);


//Convert number to boolean
amount2 = Boolean(amount2);
console.log(`Type of amount2 is ${typeof(amount2)} and its value is ${amount2}`);

//Converting string to number that is not a number
let amount3 = 'ABC100';
amount3 = Number(amount3);
console.log(`Type of amount 3 is ${typeof(amount3)} and its value is ${amount3} `);

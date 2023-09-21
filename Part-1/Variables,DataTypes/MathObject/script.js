//Finding square root of any number
const squareRootOfNumber = Math.sqrt(9);
console.log(`Square root of 9 is ${squareRootOfNumber}`);

//It converts negative to positive basically 
const absoluteNumber = Math.abs(-5);
console.log(`Absolute number of -5 is ${absoluteNumber}`);

//It basically round off the numbers.Number with less than .5 get rounded off to smaller one and Number with greater than 0.5 get rounded off to bigger one
const roundingOffNumbers = Math.round(4.1);
console.log(`Rounding off of number 4.1 is ${roundingOffNumbers}`);

//Round-up method
const roundUpNumber = Math.ceil(4.1);
console.log(`Rounding up of a number 4.1 is ${roundUpNumber}`);

//Round-down method
const roundDownNumber = Math.floor(4.8);
console.log(`Rounding down of a number 4.8 is ${roundDownNumber}`);

//Number raise to specific power
const powerOfNum = Math.pow(2,3);
console.log(`2 to the power of 3 is ${powerOfNum}`);

//Finding maximum number
const maxNumber = Math.max(5,2.5,3,1.5);
console.log(`Maximum number is ${maxNumber}`)

//Finding minimum number
const minNumber = Math.min(5,1.1,8,0.5);
console.log(`Minimum number is ${minNumber}`);

//Generating a random number.It gives decimal no between 0 and 1
const randomNumber = Math.random();
console.log(`Random number between 0 and 1 is given by ${randomNumber}`);

const decimalNoBetween1To10 = randomNumber*10 + 1;
console.log(`Random number between 1 and 10 is ${decimalNoBetween1To10}`);

const naturalNoBetween1To10 = Math.floor(decimalNoBetween1To10);
console.log( `Random natural number between 1 to 19 is ${naturalNoBetween1To10}`);
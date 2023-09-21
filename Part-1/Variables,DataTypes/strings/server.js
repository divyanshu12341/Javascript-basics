const name = 'Divyanshu';
const  age = 23;
let x;
x = 'Hello '+ 'My name is ' + name + ' and I am ' + age + ' years old';

//Template literals 
x = `Hello my name is ${name} and I am ${age} years old`;

// *String properties and methods 
const s = 'Hello World';
const lengthOfString = s.length;
// *Accessing values by key
const firstChar = s[0];
const accessingAllProperties = s.__proto__;
console.log(accessingAllProperties);
const lowerCase = s.toLowerCase();
const upperCase = s.toUpperCase();
const characterAtSpecifiedIndex = s.charAt(0);
const indexOfSpecifiedCharacter = s.indexOf('l');
const extractingStringFromIndexRange = s.substring(0,4);
const extractingStringFromStartingIndexToEnd = s.substring(3);
//!In slice method we can use negative index as well 
const extractingStringUsingSlice = s.slice(-11);
const extractingStringRangeUsingSlice = s.slice(-11,-6);

const a = '   Hello Friends';
const trimString = a.trim();
const replaceCharactersFromString = a.replace('Friends','Divyanshu');
const stringIsIncludedOrNot = a.includes('Hell');
const primitiveOfString = a.valueOf();
const splitStringIntoArray = a.split(' ');
console.log(x);
console.log(lowerCase);
console.log(upperCase);
console.log(characterAtSpecifiedIndex);
console.log(indexOfSpecifiedCharacter);
console.log(extractingStringFromIndexRange);
console.log(extractingStringFromStartingIndexToEnd);
console.log(extractingStringUsingSlice);
console.log(extractingStringRangeUsingSlice);
console.log(trimString);
console.log(replaceCharactersFromString);
console.log(stringIsIncludedOrNot);
console.log(primitiveOfString);
console.log(splitStringIntoArray);
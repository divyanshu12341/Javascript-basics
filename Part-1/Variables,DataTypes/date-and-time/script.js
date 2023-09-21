//!Here month is 0 based
const dateObject = new Date();
console.log(dateObject);
console.log(typeof dateObject);

//Convert date to string 

const dateString = dateObject.toString();
console.log(dateString,typeof dateString);
 
//New value
const customDate = new Date(2021,0,10,12,30,0);
console.log(customDate);

//We can pass a string as well
const customDateString1 = new Date('2021-07-10');
console.log(customDateString1);

//Hyphens as well
const customDateString2 = new Date('07/10/2021');
console.log(customDateString2);

//Timestamp 
//System of describing point of time that is passed since January 1970 and it is passed in milliseconds
const timestamp = Date.now();
console.log(`Timestamp in ms is ${timestamp}`);

//Getting timestamp of specific date
const timestampOfSpecificDate = new Date('07-10-2022').getTime();
console.log(timestampOfSpecificDate);

//getting date from timestamp 
const dateFromTimeStamp = new Date(1657391400000);
console.log(dateFromTimeStamp.toString());

//converting ms to s 
const msTosTimeStamp = Math.floor(Date.now()/1000);
console.log(`Timestamp in s is ${msTosTimeStamp}`);
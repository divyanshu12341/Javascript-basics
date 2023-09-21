const arr = [34,55,95,20,15];
console.log(arr);

//These methods manipulates the array
//Add element to end of an array
arr.push(100);
console.log(arr);

//Removing elements from end of an array
arr.pop();

//Add elements to start of an array
arr.unshift(200);
console.log(arr);

//Reversing an array
arr.reverse();
console.log(arr);


//These methods extract values from an array

//It checks whether values exists in an array or not
let valueExistOrNot = arr.includes(22);
console.log(`Whether value exists in an array or not: ${valueExistOrNot}`);


//It gives index of value you provided
let indexOfSpecificValue = arr.indexOf(55);
console.log(`Index of following value is ${indexOfSpecificValue}`);

//Slice method in an array
//It does not manipulate original array
let extractingValuesFromAnArrayFromIndex = arr.slice(1,4);
console.log(extractingValuesFromAnArrayFromIndex);

//Splice method in an array
//It does manipulate original array
let  extractingValuesUsingSplice= arr.splice(0,2).reverse();
console.log(extractingValuesUsingSplice)
console.log(arr);
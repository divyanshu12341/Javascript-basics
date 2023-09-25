if(true){
    console.log('This is true');
}
if(false){
    console.log('This is not true');
}
const x = 10;
const y = 20;
//!Greater than
if(x>y){
    console.log(`${x} is greater than ${y}`);
}
//!Equals to
//!Here in below statement,if x equals to y then it executes if statement.
//!If x not equals to y then it executes else statement
if(x===y){
    console.log(`${x} equals to ${y}`);
}
else{
    console.log(`${x} not equals to ${y}`);
}

//!Not equals to operator
if(x!==y){
    const z = 20;
    console.log(`z is ${z}`);
}

//!Shorthands of if statement
//!It is not recommended as it reduces readability of code 
if(x<y) console.log(`x is greater than y`),console.log(`This is true`);
else console.log(`This is false`);
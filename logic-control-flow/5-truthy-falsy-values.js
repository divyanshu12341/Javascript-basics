const email = 'test@test.com';
//!If we passed something to if statement,it will be coersed to boolean
//!Given below are some falsy values:
//!false
//!0
//!"" pr ' '(empty string)
//!null
//!undefined
//!NaN
if(email){
    console.log(`You passed in an email`);
}
console.log(Boolean(email));

const falsyValue = NaN;
if(falsyValue){
    console.log(`This is truthy`);
}else{
    console.log(`This is falsy`);
}

//!Truthy and falsy cavias
const noOfChildren = 0;
if(noOfChildren||noOfChildren!=undefined){
    console.log(`You have ${noOfChildren} children`);
}else{
    console.log(`Please enter no of children`);
}

//!Checking for empty posts 
const posts = [];
//!We cannot do if(posts) as empty array is truthy value
if(posts.length>0){
    console.log(`List posts`);
}else{
    console.log(`No Posts`);
}

//!Checking for empty objects
const user = {}
if(Object.keys(user).length>0){
    console.log(`List user`);
}else{
    console.log(`No user`);
}

//!Loose equality(==)
//!It will not check the type only check values
console.log(''==0);
console.log(null==undefined);

//!Equality(===)
//!It will check the type as well as value
console.log(''===0);
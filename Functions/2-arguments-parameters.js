function registerUser(user){
    return user + ' is registered';
}
const registeredUser  = registerUser('Divyanshu');

// !Old way of using default value before ES-6
function signUpUser(user){
    if(!user){
        user = 'Bot'
    }
    return user + ' is registered';
}
console.log(signUpUser());

//!After ES-6 
function registerCompany(company = 'Dummy'){
    return 'Company ' + company + ' is registered'
}
console.log(registerCompany());
//!After passing a value to arguements it is using that value 
console.log(registerCompany('Akeo'));

//!Rest parameters 
function sum(...numbers){
    let total = 0;
    console.log(numbers.length);
    for(let num of numbers){
        total = total+num;
    }
    return total;
}
console.log(sum(1,2,3));

//!Objects as parameters
const user = {
    id:1,
    name:"Divyanshu Jain"
} 
function loginUser(user){
    return `The user ${user.name} with id ${user.id} logged in successfully`;
}
console.log(loginUser(user));
console.log(loginUser({
    id:2,
    name:'Vansh Vijay'
}));

//!Arrays as params 
function getRandom(arr){
    const randomIndex = Math.floor(Math.random()*arr.length);
    const item = arr[randomIndex];
    console.log(`Item of index ${randomIndex} is ${item}`);
}
getRandom([1,2,3,4,5,6,7]);
const age = 19;
//using if statement 
if(age>=18) console.log(`You can vote`);
else console.log(`You cannot vote`);

//Using ternary operator
age>=18 ? console.log('You can vote'):console.log(`You cannot vote`);

//Assigning value to variable
const canVote = age>=18? true : false;
console.log(canVote);
const canVote2 = age>=18? console.log(`You can vote`):console.log(`You cannot vote`);

//Multiple statements
const auth = true;
const redirect = auth ?(console.log('Welcome to the dashboard'),'/dashboard'):(console.log('Access Denied'),'/login');
console.log(redirect); 


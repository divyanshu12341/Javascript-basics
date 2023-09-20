//Arithmetic operators
let x;
x = 5+ 5;
console.log(`Addition operator is + : ${x}`);
x = 5-5;
console.log(`Substraction operator is - : ${x}`);
x = 5*5;
console.log(`Multiplication operator is * : ${x}`);
x = 5/5;
console.log(`Division operator is / : ${x}`);
x = 5 % 5;
console.log(`Modulus operator is % : ${x}`);


// Concatenation operator 
let y = 'Hello' + ' ' + 'World';
console.log(`Concatenation operator result is ${y}`);

//Exponent operator 
y = 2**3;
console.log(`Exponentiation operator is ${y}`);

//Increment operator 
y++;

//Decrement operator 
y--;

//Assignment operator 
let z  = 20;
//z = z+10
z += 10;
//z = z-15
z -= 15;
//z = z*20
z *= 20;
// z = z/10
z /= 10;

//Comparison operator 

//It only checks for value not type is equal or not
z = (2 =='2');
console.log(`Double equals operator: ${z}`);

//It checks for both type and value is equal or not
z = (2 === '2');
console.log(`Triple equals operator: ${z}`);

//It  checks for value not type is not equal or not.It returns true if it is not equal and false if it is equal

z = (2 != '2');
console.log(`Double not equals operator: ${z}`);

//It checks for both value and type is not equal or not.It returns true if it is not equal and false if it is equal
z = (2 !=='2');
console.log(`Triple not equals operator: ${z}`);

z = 10>5;
console.log(`Greater than operator: ${z}`);

z = 10<5;
console.log(`Less than operator: ${z}`);

z = 10>=5;
console.log(`Greater than or equals to: ${z}`);

z = 10<=5;
console.log(`Less than or equals to: ${z}`);
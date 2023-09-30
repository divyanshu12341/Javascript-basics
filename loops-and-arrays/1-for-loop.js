//for(initialExpression;conditionExpression;incrementExpression)
//statement;

//INITIAL EXPRESSION: Initializes a variable counter
//CONDITIONAL EXPRESSION: Condition that loop will continue to run as long as it is met or until condition is false
//INCREMENT EXPRESSION: Expression that will be executed after each iteration of the loop.Usually,increments the variable
for (let i = 0; i <= 10; i++) {
  if (i == 7) {
    console.log(`7 is my lucky number`);
  } else {
    console.log(`Number: ${i}`);
  }
}

// Nest loops
for (let i = 1; i <= 10; i++) {
  console.log(`Number ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}*${j}=${i * j}`);
  }
}

//Loop through an array
const names = ["Divyanshu", "Jain", "Vansh", "Vijay"];
for (let i = 0; i <= names.length; i++) {
  console.log(`For index ${i}: value are ${names[i]}`);
}

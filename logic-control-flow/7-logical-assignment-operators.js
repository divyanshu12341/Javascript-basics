// || = assigns the right side value only if left side is falsy value
let a = false;
if(!a){
    a = 10;
}
console.log(`a using if statement ${a}`);
//Same thing using OR operator
a = a || 10;
console.log(`a using OR operator ${a}`);

// && = assigns the right side value only if left side is truthy value

let b = 20;
if(b) {
    b = 10;
}
console.log(`b using if statement is ${b}`);
b = 20;
b = b && 20;
console.log(b);

// ??= assigns the right side value only if left is null or undefined
let c = null;
c = c ?? 40;
console.log(`c using nullish operator is ${c}`);


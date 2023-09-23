const x = 100;
if(true){
    const y = 200;
    console.log(x);
    console.log(x+y);
}
//!It does not gonna work as it is not defined in global scope
// console.log(x+y);
//!Difference between var,let and const
//!var is function scoped means you cannot access var declared inside a function from  outside a function 
if(true){
    const a = 500;
    let b = 400;
    var c = 300;
};
// console.log(a);//throws an error
//console.log(b); throws an error
console.log(c);

function varIsFunctionScoped(){
    var b = 500;
    console.log(b);
}
// console.log(b); Throws an error
//!While loop
let i = 1;
while(i<=20){
    console.log(`Number + ${i}`);
    i = i+1;
}
//!Loop over array
i = 0;
const array = [10,20,30,40];
while(i<array.length){
    console.log(array[i]);
    i++;
}

//!Nesting while loops
while(i<=5){
    console.log(`Number + ${i}`);
    
    let j=1;
    while(j<=10){
        console.log(`${i}*${j} = ${i*j}`);
        j = j+1;
    }
    i = i+1;
}

//!Do while loop
//!It runs atleast once even if condition never met
i = 2;
do{
    console.log(`Number:${i}`);
    i++;
}while(i<=0)
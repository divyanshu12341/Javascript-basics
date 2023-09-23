//!Values of parent function can be accessed by child function but not vice-versa
function first(){
    let x = 100;
    function second(){
        let y = 200;
        console.log(x+y);
    }
    second();
}
first();


//!It applies same for blocks 
if(true){
    const x = 100;
    if(x === 100){
        const y = 200;
        console.log(x+y);
    }
    console.log(y);
}

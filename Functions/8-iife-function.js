//!IIFE
//!Its scope is inside the that parenthisis
(function(){
    const user = 'Divyanshu';
    console.log(user);
})();


//!IIFE with parameters
(function(name){
    console.log('Hello ' + name);
})('Divyanshu Jain');

//!IIFE with separate function name
(function hello(){
    console.log(`Hello my friend!How are you?`);
})();
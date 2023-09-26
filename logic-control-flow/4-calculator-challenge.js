function calculator(num1,num2,operator){
    let ans= 0;
    switch(operator){
        case '+':
             ans = num1+num2;
            break;
        case '-':
             ans = num1 - num2;
             break;
        case '*':
            ans = num1*num2;
            break;
        case '/':
            ans = num1/num2;
            break;
        default:
            ans = 'Invalid Operator';
    }
    return ans;
}

const add = calculator(5,2,'+');
console.log(`Addition of a and b is ${add}`);
const substract = calculator(5,2,'-');
console.log(`Substraction of  a and b is ${substract}`);
const multiplication = calculator(5,2,'*');
console.log(`Multiplication of a and b is ${multiplication}`);
const division = calculator(5,2,'/');
console.log(`Division of a and b is ${division}`);
const invalidOperation = calculator(5,2,'#');
console.log(`${invalidOperation}`);
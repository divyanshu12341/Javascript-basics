let x;
console.log(x,typeof x);

x = 5 + '5';
console.log(`value of 5 + '5' is ${x}. Now `,`It's type is ${typeof x}`);

x = 5 + Number(5);
console.log(`value of 5 + Number(5) is ${x}. Now `,`It's type is ${typeof x}`);

x = 5 * '5';
console.log(`value of 5 * '5' is ${x}. Now `,`It's type is ${typeof x}`);

x = 5 + null;
console.log(`value of 5 + null is ${x}. Now `,`It's type is ${typeof x}`);

x = Number(null);
console.log(`value of Number(null) is ${x}. Now `,`It's type is ${typeof x}`);

x = 5 + true;
console.log(`value of 5 + true is ${x}. Now`,`It's type is ${typeof x}`);

x = 5 + false;
console.log(`value of 5 + false is ${x}. Now`,`It's type is ${typeof x}`);
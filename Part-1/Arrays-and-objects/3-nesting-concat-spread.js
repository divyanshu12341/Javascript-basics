//Array within array
const originalFruits = ['apple','pear','orange'];
const fruits = originalFruits;
const berries = ['blueberry','strawberry','rasberry'];
fruits.push(berries);
console.log(fruits);
console.log(originalFruits);
const allFruits = [fruits,berries];
console.log(fruits[3][1]);
console.log(allFruits);

//Adding elements of one array into another separate array
const fruit = ['apple','pear','orange'];
const berry = ['blueberry','strawberry','rasberry'];
const allFruit = fruit.concat(berry);
console.log(allFruit);

//Spread operator 
const bothFruitAndBerry = [...fruit,...berry];
console.log(bothFruitAndBerry);

// *Flatten array
const arrToBeFlatten = [1,2,[3,4],5,[6,7],8];
const flattenArray = arrToBeFlatten.flat();
console.log(flattenArray);

// *Static methods on array object

// *Check whether it is an array or not
let arrOrNot = Array.isArray(arrToBeFlatten);
console.log(arrOrNot);
arrOrNot = Array.isArray('a');
console.log(arrOrNot);

// *Create an array from string 
let createArrFromString = Array.from('123456');
console.log(createArrFromString);

// *Create an array from set of values
const a =1;
const b = 2;
const c = 3;
const createArrFromSetOfValues = Array.of(a,b,c);
console.log(createArrFromSetOfValues);


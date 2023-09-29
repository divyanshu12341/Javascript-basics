//When we use &&,everything needs to be true for output to be true
console.log(10>20 && 30>15);
//When we use ||,only one needs to be true for output to be true
console.log(10>20 || 30>15);

//Will return first falsy value or last value
const returnLastValue = 20 && 40;
console.log(returnLastValue);
const returnFalsyValue = 20 && 0 && 40;
console.log(returnFalsyValue);

//Real life example
const Posts = ['Post-1','Post-2'];
const showPostsIfAvailable = Posts.length>0 && Posts[1];
console.log(showPostsIfAvailable);

// ||-->will return first truthy value or last value
const returnFirstTruthyValue = 20 || 40;
console.log(returnFirstTruthyValue);

const lastValue = undefined || '' ||0;
console.log(lastValue);

// Nullish  coalescing operator
//Returns right side when left is undefined or null
const leftSide = 10 ?? 20;
const rightSide = undefined ?? 10;
console.log(rightSide);
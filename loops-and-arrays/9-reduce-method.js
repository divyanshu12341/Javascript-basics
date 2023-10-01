const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = arr.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);
console.log(sum);

const cart = [
  {
    id: 1,
    name: "Product 1",
    price: 130,
  },
  {
    id: 2,
    name: "Product 2",
    price: 160,
  },
  {
    id: 3,
    name: "Product 3",
    price: 200,
  },
];
const total = cart.reduce((acc,cur)=>acc + cur['price'],0);
console.log(total);
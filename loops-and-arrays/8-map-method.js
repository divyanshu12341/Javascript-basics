//!Here we modify existing array based on certain conditions
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(`Modified array is ${doubledNumbers}`);
console.log(`Original array is ${numbers}`);

//!forEach
const doubledNumbers2 = [];
numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});
console.log(`doubledNumbers2: ${doubledNumbers2}`);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2006, end: 2011 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
//Create an array of company names
const companyNames = companies.map((company) => company["name"]);
console.log(companyNames);

//Create a new array with just company names and categories
const companyCategories = companies.map((company) => company["category"]);
console.log(companyCategories);

const companyInfo = companyNames.concat(companyCategories);
console.log(companyInfo);

//Create a new object with company name and categories
const companyInfo2 = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
console.log(companyInfo2);

//Create an array of length of each company in years
const companyLasts = companies.map(
  (company) => company["end"] - company["start"]
);
console.log(companyLasts);

//Create an array of objects with name and length of company in years
const arr1 = [];
const companyYears = companies.map((company) => {
  const obj = {
    name: company.name,
    length: company.end - company.start + " years",
  };
  arr1.push(obj);
});
console.log(arr1);

//Chain map methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((number) => number * 2);
console.log(squareAndDouble);

//Chain map and filter method
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);
console.log(evenDouble);

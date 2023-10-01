//!Filter method returns portion of an array that pass the test case we provided
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((el) => el % 2 == 0);
console.log(evenNumbers);

//!Same with for-each
const arr2 = [];
numbers.forEach((el) => {
  if (el % 2 == 0) {
    arr2.push(el);
  }
});
console.log(arr2);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1991, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
//Get only retail companies
const retailCompanies = companies.filter((el) => el["category"] === "Retail");
console.log(retailCompanies);

//Get the companies started in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter(
  (el) => el["start"] >= 1980 && el["end"] <= 2005
);
console.log(earlyCompanies);

//Get companies that lasted 10 years or more
const longLastedCompanies = companies.filter(
  (el) => el["end"] - el["start"] >= 10
);
console.log(longLastedCompanies);

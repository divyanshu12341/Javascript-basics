//document.getElementById
console.log(document.getElementById('item-form'));
console.log(document.getElementById('item-form').id);
console.log(document.getElementById('item-form').getAttribute('id'));

//SET ATTRIBUTE
//1st way
document.getElementById('item-form').title = 'Shopping List';
//2nd way
document.getElementById('item-form').setAttribute('class','title');
const title = document.getElementById('item-form');
console.log(title);

// GET/CHANGE CONTENT
console.log(title.textContent);
title.textContent = `Hello World`;
title.innerText = `Hello Again`;
title.innerHTML = `<h1>Shopping List</h1>`;

// Change styles
title.style.color = 'Red';
title.style.backgroundColor = 'Green';
title.style.borderRadius = '10px';

// Selecting elements 
//querySelector -->It will select only first one if there are multiple on the page
const h1 = document.querySelector('h1');
console.log(h1);
const id = document.querySelector('#item-list');
console.log(id);
const attributeSelection = document.querySelector("input[type='text']");
console.log(attributeSelection);
const nthListItem  = document.querySelector("li:nth-child(2)").innerText;
console.log(nthListItem);
const thirdListItem = document.querySelector("li:nth-child(3)");
thirdListItem.innerText = `Apple Juice`;
thirdListItem.style.color = `Green`;

const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'Blue';
console.log(firstItem);
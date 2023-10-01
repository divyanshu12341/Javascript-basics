//Get child element from parent
const parent = document.querySelector('.parent');
console.log(parent);

//Get children properties
//It gives HTML Collection
const children = parent.children;
console.log(children);

const secondChildrenText = parent.children[1].innerText;
console.log(secondChildrenText);

const secondChildrenClass = parent.children[1].className;
console.log(secondChildrenClass);

parent.firstElementChild.innerText = `Child One`;
parent.lastElementChild.innerText = `Child Three`;

//Get parent elements from a child
const child = document.querySelector('.child');
console.log(child);

const parentEl = child.parentElement;
console.log(parentEl);

parentEl.style.border = '1px solid #ccc';
parentEl.style.padding = '10px';

//Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
const secondItemSibling1 = secondItem.nextElementSibling;
const secondItemSibling2 = secondItem.previousElementSibling;
console.log(secondItem);
console.log(secondItemSibling1);
console.log(secondItemSibling2);

secondItemSibling1.style.color = 'orange';
secondItemSibling2.style.color = 'green';


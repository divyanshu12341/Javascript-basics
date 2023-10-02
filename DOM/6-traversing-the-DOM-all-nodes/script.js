const parent = document.querySelector('.parent');
const childNodes = parent.childNodes;
console.log(childNodes);
const firstChildNode = parent.childNodes[0];
console.log(firstChildNode);
const nodeName = firstChildNode.nodeName;
console.log(nodeName);
const thirdChildNode = parent.childNodes[3].outerHTML;
console.log(thirdChildNode);
parent.childNodes[3].innerText = 'Text changed';

const firstChild = parent.firstChild;
console.log(firstChild);

const lastChild = parent.lastChild;
console.log(lastChild);

//Parent node
const child = document.querySelector(".child");
console.log(child);

const parentNode = child.parentNode;
console.log(parentNode);

parentNode.style.backgroundColor = '#ccc';
parentNode.style.padding = '10px';

//  Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
console.log(secondItem);

// const nextNode = secondItem.nextSibling;
// console.log(nextNode);

const prevNode = secondItem.previousSibling;
console.log(prevNode);

const nextNode = secondItem.nextSibling;
console.log(nextNode);
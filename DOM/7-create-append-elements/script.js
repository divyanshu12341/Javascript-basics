//Creates a new element
const div = document.createElement('div');
//Adding attributes to a div
div.className = 'my-element';
div.id = 'my-element';
//We can also use set attributes method
div.setAttribute('title','my-element');
div.innerText = `Hello my friend how are you?`;
console.log(div);

const text = document.createTextNode('How are you my friend!Whats up');
div.appendChild(text);

// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);
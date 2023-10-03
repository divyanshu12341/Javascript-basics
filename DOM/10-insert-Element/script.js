//beforebegin
//beforeend
//afterbegin 
//afterend

//insertAdjacentElement Example
function insertElement(){
  const filter = document.querySelector('.filter');
  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';
  filter.insertAdjacentElement('beforebegin',h1);
}
insertElement(); 

//insertAdjacentText example
function insertText(){
  const item = document.querySelector('li');
  item.insertAdjacentText('afterend','insertText');
}

//insertAdjacentHTML example

function insertHTML(){
  const clearBtn = document.querySelector("#clear");
  clearBtn.insertAdjacentHTML('beforeend','<h1>This is heading</h1>')
} 

//insertBefore example
function insertBeforeItem(){
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = 'insertBefore';
  const thirdItem = document.querySelector("li:nth-child(3)");
  ul.insertBefore(li,thirdItem);
}
insertText();
insertHTML();
insertBeforeItem();
function replaceFirstItem(){
  const firstItem = document.querySelector('li');
  const li = document.createElement('li');
  li.textContent = 'Replace First';
  firstItem.replaceWith(li);
}

function replaceSecondItem(){
  const secondItem = document.querySelector('li:nth-child(2)');
  secondItem.outerHTML = '<li>Replace second li </li>'; 
}

function replaceAllItems(){
  const li = document.querySelectorAll('li');
  li.forEach((item,index)=>{
    // item.outerHTML = `<li>Replace All</li>`;
    item.outerHTML = `<li>${index+1} element</li>`
  })
}

function replaceChildHeading(){
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");
  const h2 = document.createElement("h2");
  h2.id = 'app-title';
  h2.textContent = 'Shopping List';
  header.replaceChild(h2,h1);
}
replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();
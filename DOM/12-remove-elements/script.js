function removeClearButton(){
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}
removeClearButton();

function removeFirstItem(){
  const ul = document.querySelector('ul');
  const li = document.querySelector('li');
  ul.removeChild(li);
}
removeFirstItem();

function removeItem(index){
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${index})`);
  ul.removeChild(li);
};
removeItem(2)

function removeItem2(index){
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[index];
  ul.removeChild(li);
}
removeItem2(0);

function removeItem3(index){
  const li = document.querySelector(li);
  li[index].remove();
}
const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');
function run(){
    console.log(text.className);
    // text.className = 'dark';
    text.classList.toggle('dark');
    text.classList.replace('card','dark');

    //change style 
    itemList.style.lineHeight = '3';

    //for each item
    items.forEach((item,index)=>{
        item.style.color = 'red';
        if(index === 2){
            item.style.color = 'blue'
        }
    })
}
document.querySelector('button').onclick = run;

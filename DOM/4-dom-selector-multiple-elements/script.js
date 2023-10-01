//querySelectorAll()
//It gives us nodelist which is array like structure
//We can use high-level array methods on nodelist while in html collection,we need to convert it into an array to use it
const listItems = document.querySelectorAll('.remove-item');
console.log(listItems);
listItems.forEach((item,index)=>{
    item.style.color = 'aqua'
    if(index===1){
        item.remove();
    }
})

//Get elements by class name
//Since it returns HTML Collection we cannot use forEach Method here
const listItems2 = document.getElementsByClassName('items');
console.log(listItems2);

//Get elements by tag name
const listItems3 = document.getElementsByClassName('items');
console.log(listItems3);


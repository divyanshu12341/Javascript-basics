// Quick and Dirty
//It is less efficient as it lets browser to reparse and recreate DOM Element
function createListItem(item){
    const li = document.createElement("li");
    li.innerHTML = `${item}  
    <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button> `;
    document.querySelector('.items').appendChild(li);
}

//Clean and Performant
function createNewItems(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';
    console.log(button);
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark'
    button.appendChild(icon);
    li.appendChild(button);
    document.querySelector('.items').appendChild(li);

}
createListItem('Egg');
createNewItems('Bread');
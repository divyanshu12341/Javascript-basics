function createListItem(item){
  const li = document.createElement('li');
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(document.createTextNode(item));
  li.appendChild(button);
  document.querySelector('.items').appendChild(li);
}
function createButton(classes){
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes){
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

createListItem('cheese');
createListItem('maggi');
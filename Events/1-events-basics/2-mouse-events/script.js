const clearBtn = document.querySelector("#clear");
function onClear() {
  alert("Clear Items using function");
}
//Javascript event listeners
// clearBtn.onclick = ()=>{
//     alert("Clear items");
// }

//Event listeners using addEventListener
clearBtn.addEventListener("click", () => {
  alert("Clear Items");
});
clearBtn.addEventListener("click", () => {
  alert("Logging clear items");
});
clearBtn.addEventListener("click", onClear);
setTimeout(()=>clearBtn.removeEventListener('click',onClear),5000);
// setTimeout(()=>clearBtn.click() ,5000)

//Clear it 
const clearItems = () =>{
    //first way
    // const itemList = document.querySelector("#item-list");
    // itemList.innerHTML = '';

    //second way
    // const items = document.querySelectorAll("li");
    // items.forEach((item)=>item.remove());

    //third way
    const itemList = document.querySelector("#item-list");
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
    
}
clearBtn.addEventListener("click",clearItems);
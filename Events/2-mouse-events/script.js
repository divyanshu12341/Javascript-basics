const logo = document.querySelector("img");
const onClick = () =>{console.log("Click Event");}
const onDoubleClick = () =>{
    if(document.body.querySelector(".btn").style.backgroundColor !=='Green'){
        console.log('Color gonna change now');
        document.body.querySelector(".btn").style.backgroundColor = 'Green';
    } else {
        console.log("Color is changing ");
        document.body.querySelector(".btn").style.backgroundColor = 'Black';
    }
}
const onRightClick = ()=>{
    console.log('Right click event');
}
const onMouseDown = () =>{
    console.log('Mouse Down Event');
}
const onMouseUp = () =>{
    console.log('Mouse Up Event');
}
const onMouseWheel = () =>{
    console.log('Scrolling Event');
}
const onMouseOver = () =>{
    console.log('Mouse over event');
}
const onMouseOut = () =>{
    console.log('Mouse out event');
}
const onDragStart = () =>{
    console.log('On Drag Start Event');
}
const onDrag = () =>{
    console.log('Dragging Event');
}
const onDragEnd = () =>{
    console.log('Drag End Event');
}
//Event listeners
logo.addEventListener("click",onClick);
logo.addEventListener("dblclick",onDoubleClick);
logo.addEventListener("contextmenu",onRightClick);
//Mousedown event is when holding a mouse key
logo.addEventListener("mousedown",onMouseDown)
//When we release the mouse then onMouseUp event
logo.addEventListener("mouseup",onMouseUp)
logo.addEventListener("wheel",onMouseWheel);

//Hover events
logo.addEventListener("mouseover",onMouseOver);
logo.addEventListener("mouseout",onMouseOut);

//Dragging events
logo.addEventListener("dragstart",onDragStart);
logo.addEventListener("drag",onDrag);
logo.addEventListener("dragend",onDragEnd)
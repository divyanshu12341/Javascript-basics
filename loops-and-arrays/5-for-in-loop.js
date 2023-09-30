const colorObj = {
    color1:'Red',
    color2:'Blue',
    color3:'Yellow',
    color4:'Orange'
}
for(const key in colorObj){
    console.log(key,colorObj[key]);
}

const colorArr = ['Red','Green','Blue','Yellow'];
for(const key in colorArr){
    console.log(key,colorArr[key]);
}
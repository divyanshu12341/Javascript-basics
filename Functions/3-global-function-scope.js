// ! Window is a topmost object.It runs on a global scope.If we want to access inner Height property inside window object,then we do not need to write window.innerHeight to access the property.We only need to write innerHeight property to access it as it window is a topmost object that can be accessed from everywhere.It is accessed in browser and it is not available in nodeJS Runtime environment.
// console.log(innerHeight);

const x = 100;
function add(){
    //!Here scope of y is limited to add function only.It is not accessible outside the function.
    const y = 50;
    //!Here it replaces global value of x with this local value of x.
    const x = 1;
    console.log(y);
    console.log(x+y);
}

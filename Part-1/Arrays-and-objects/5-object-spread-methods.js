//!Nesting of objects 
const Person = {
    address:{
        cords:{
            lat:42.398,
            lng:-71.32
        }
    }
}
console.log(Person.address.cords.lat);


//!Another way of nesting 
const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const obj3 = {obj1,obj2};
console.log(obj3);

//!Spread operator
const obj4 = {...obj1,...obj2};
console.log(obj4);

//!Assign is same as spread operator
const obj5 = Object.assign({},obj1,obj2);
console.log(obj5);

//!Array of objects
const todos = [{
    id:1,name:'Buy Milk'
},
{
    id:2,name:'Pickup kids from school'
},{
    id:3,name:'Take out trash'
}];
const firstTodosId = todos[0].name;
console.log(firstTodosId);

const puttingObjectKeysInArray = Object.keys(obj4);
console.log(puttingObjectKeysInArray);

// !Number of properties in an object
const noOfPropertiesOfAnObject = Object.keys(obj4).length;
console.log(noOfPropertiesOfAnObject);

const puttingObjectValuesInAnArray = Object.values(obj4);
console.log(puttingObjectValuesInAnArray);

const arrayOfKeyValuePairs = Object.entries(obj4);
console.log(arrayOfKeyValuePairs);

const propertyExistsOrNot = obj4.hasOwnProperty('name');
console.log(propertyExistsOrNot);

//!Arrays
const items = ['Book','Table','Chair','Kite'];
for(let item of items){
    console.log(item);
}
//!Arrays of objects
const users = [{
    firstName:'Divyanshu',
    lastName:'Jain'
},{
    firstName:'Vansh',
    lastName:'Vijay'
},{
    firstName:'Tanmay',
    lastName:'Goyal'
}]
for(const user of users){
    console.log(user.firstName);
}

//!Loop over strings 
const str = 'Divyanshu Jain';
for(const letter of str){
    console.log(`${letter}`);
}

//!Loop over maps
const map = new Map();
map.set('Name','Divyanshu');
map.set('Age',23);
for(const [key,value] of map){
    console.log(key,value);
}
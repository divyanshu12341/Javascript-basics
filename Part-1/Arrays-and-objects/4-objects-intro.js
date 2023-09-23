// !Object is a data-structure that holds key-value pairs 

const Person = {
    name:'Divyanshu',
    age:23,
    isAdmin:true,
    address:{
        street:'123 Main St',
        city:'Boston',
        state:'MA'
    },
    hobbies:['music','sports']
}
console.log(Person);

const PersonObjectConstructor = new Object({name:'Vansh Vijay',age:23});
console.log(PersonObjectConstructor);
//!Accessing key-value pairs of person object
const personName = Person.name;
console.log(personName);

const personAge = Person['age'];
console.log(personAge);

const streetOfAddressOfPerson = Person.address.state;
console.log(streetOfAddressOfPerson);

const hobbiesOfPerson =Person.hobbies[0];
console.log(hobbiesOfPerson);

//!Updating elements of an Object
Person.name = `Divyanshu Jain`;
Person['age'] = 24;

//!Deleting elements of an Object
delete Person.age;
console.log(Person);

//!Adding properties to an object 
Person.hasChildren = true;
console.log(Person);

Person.greet = function(){
    console.log(`My name is ${this.name} `);
}
Person.greet();

//!Accessing keys with spaces
const Person2 = {
    'first name':'Divyanshu',
    'last name':'Jain'
}
console.log(Person2['first name']);
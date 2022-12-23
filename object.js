'use strict';

// objects
// one of the js's data types
// a collection of related data and/or functionality
// object = { key : value };

// literals and properties
const obj1 = {}; //object literal
const obj2 = new Object(); //object constructor

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const p1 = {name:'jane', age:20};
print(p1);

p1.hasJob = true;
console.log(p1.hasJob); //true

delete p1.hasJob;
console.log(p1.hasJob); //undefined

// computed properties
// key should always be string type
console.log(p1['name']);

p1['hasJob'] = true;
console.log(p1.hasJob); //true

// property value shorthand
const p2 = makePerson('jane', 22);
function makePerson(name, age) {
    return {name, age};
}
console.log(p2); // {name:'jane', age:22}

// constructor function
function Person(name, age) {
    //this = {};
    this.name=name;
    this.age=age;
    //return this;
}
const p3 = new Person('jane', 21);
console.log(p3);

// in operator
// checking property extistence
// key in object
console.log('name' in p3); //true
console.log('age' in p3); //true

// for ( key in object )
for(key in p3){
    console.log(key);
}

// for ( value of iterable )
const arr = [1,2,3];
for( value of arr){
    console.log(value);
}

// cloning
// Object.assign(dest, [obj1, obj2, ...])
const user1 = {name:'jane', age:20};
const user2 = user1;
user2.name = 'coder';
console.log(user); //{name:'coder', age:20};

const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size:'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(`color=${mixed.color}, size=${mixed.size}`); //color=blue, size=big

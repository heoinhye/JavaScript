'use strict';

// array
const arr1 = new Array();
const arr2 = [1,2];

const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length); //2
console.log(fruits[0]); //apple
console.log(fruits[fruits.length-1]) //banana

// looping
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));

// push
fruits.push('strawberry'); 
console.log(fruits); //apple, banana, strawberry

// pop
fruits.pop(); 
console.log(fruits); //apple, banana

// unshift
// slower than push
fruits.unshift('lemon');
console.log(fruits); //lemon, apple, banana

// shift
// slower than pop
fruits.shift();
console.log(fruits); //apple, banana

// splice
fruits.splice(1);
console.log(fruits); //apple

// concat
const fruit3 = ['grape', 'pineapple'];
const fruit4 = fruits.concat(fruit3);
console.log(fruit4); //apple, grape, pineapple

// searching
console.log(fruit4.indexOf('apple')) //0
console.log(fruit4.includes('apple')) //true

fruit4.push('apple');
console.log(fruit4.lastIndexOf('apple')); //3
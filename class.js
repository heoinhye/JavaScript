'use strict';

// object-oriented programming
// class : template
// object : instance of a class
// javascript class (added in ES6)

// class declaration
class Person {
    constructor(name, age){
        this.name=name;
        this.age;
    }

    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const p1 = new Person('jane', 20);
p1.speak();

// getter and setter
class User {
    constructor(firstNm, lastNm, age){
        this.firstNm=firstNm;
        this.lastNm=lastNm;
        this.age=age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        //if(value < 0){ throw Error('age cannnot be negative'); }
        this._age = value < 0? 0 : value;
    }
}

const u1 = new User('steve', 'jobs', 22);

// fields
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const e1 = new Experiment();
console.log(e1.publicField); //0
console.log(e1.privateField); //undefined

// static properties and methods
class Article {
    static publisher = 'hello js';
    constructor(value){
        this.value=value;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const a1 = new Article(1);
console.log(a1.publisher); //undefined
console.log(Article.publisher); //hello js

// inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width*this.height;
    }
}

class Rectangle extends Shape {

}

class Triangle extends Shape {
    getArea() { //overriding
        return (this.width*this.height)/2;
    }

    toString() {
        return `Triangle: color=${this.color}`;
    }
}

const r1 = new Rectangle(100,200,'black');
r1.draw(); //drawing black color of

const t1 = new Triangle(200,300,'pink');
console.log(t1.getArea());

// instanceof
// class checking
console.log(r1 instanceof Rectangle); //true


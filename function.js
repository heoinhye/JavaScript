'user strict';

// function declaration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSometing, command, verb
function printHello() {
    console.log('hello');
}
printHello();


// parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const employee = {name:'jane'};
changeName(employee);
console.log(employee);

// default parameters (added in ES6)
function showMessage(msg, from='unknown') {
    console.log(`${msg} by ${from}`);
}
showMessage('hey');

// rest parameters (added in ES6)
function printAll(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('girls', 'dream', 'big');

// local scope
let globaleMsg = 'global';
function printMsg(){
    let msg = 'hello';
    console.log(msg);
    console.log(globaleMsg);
}
printMsg();

// return values
function sum(a,b){
    return a+b;
}
const result = sum(1,2);

// early return, early exit
function upgradeUser(user){
    //bad
    if(user.point > 10){
        //long logic....
    }

    //good
    if(user.point <= 10){
        return;
    }
    //long logic...
}


// first-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){ //anonymous function
    console.log('print!');
}
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1,3));

// callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
const printYes = function(){
    console.log('yes');
};
const printNo = function(){
    console.log('no');
};
randomQuiz('love you', printYes, printNo);

// arrow function
// always anonymous
const simplePrint = function(){
    console.log('simplePrint');
};

const simplePrint = () => console.log('simpePrint');

const simpleMultiply = (a,b) => {
    return a*b;
}

// IIFE (Immediately Invoked Function Expression)
function hello(){
    console.log('iife')
}
hello();

(function hello() {
    console.log('iife');
})();
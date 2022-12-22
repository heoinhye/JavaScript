// 1. use strict (added in ES5)
// use this for Valina Javascript.
'use strict';

// 2. variable let (added in ES6)
// mutable type (read and write)
let globalNm = 'jane'; //메모리에 항상 탑재. 최소한 사용 권장.
{
    let nm = 'inhye';
    console.log(nm); //inhye
    console.log(globalNm); //jane
}
console.log(nm); //
console.log(globalNm); //jane

// variable var (DON'T EVER USE THIS!)
age = 4;
var age;

// 3. constant
// immutable type (read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const DAYS_IN_WEEK = 7;
const MAX_NUMBER = 5;

// 4. variable types
// - primitive (single item) : number, string, boolean, null, undefined, symbol 
// - object (box container) : function
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`); //value: 17, type: number
console.log(`size: ${size}, type: ${typeof size}`); //size: 17.1, type: number

// special numeric values
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity); //Infinity
console.log(negativeInfinity); //-Infinity
console.log(nAn); //NaN

// object
const jane = {
    age : 20,
    country : korea
};
console.log(jane.age); //20

jane.age = 21;
console.log(jane.age); //21

// 5. dynamic typing
let text = 'hello';
console.log(`text: ${text}, type: ${typeof text}`); //text: hello, type: string

text = 1;
console.log(`text: ${text}, type: ${typeof text}`); //text: 1, type: number

text = '7'+5;
console.log(`text: ${text}, type: ${typeof text}`); //text: 75, type: string

text = '8'+'2';
console.log(`text: ${text}, type: ${typeof text}`); //text: 4, type: number
// 1. var – declaration hoisted + initialized with undefined
console.log(x);     // undefined
var x = 10;
console.log(x);     // 10

// JavaScript sees this as:
// var x;              ← hoisted
// console.log(x);
// x = 10;


// 2. function declaration – fully hoisted (can be called before declaration)
sayHello();         // "Hello!"  ← works!

function sayHello() {
  console.log("Hello!");
}


// 3. Function expression (not hoisted!)
greet();            // TypeError: greet is not a function

var greet = function() {
  console.log("Hi!");
};


// 4. let / const – hoisted but in Temporal Dead Zone (TDZ)
console.log(a);     // ReferenceError: Cannot access 'a' before initialization
let a = 100;

console.log(b);     // ReferenceError (TDZ)
const b = 200;
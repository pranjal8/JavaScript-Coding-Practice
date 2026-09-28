let obj = {};
function A() {
  return obj;
}

function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log(a === b); //true

/* 
    If a function returns an object then new returns it instead of this.
    So they can, for instance, return the same externally defined object obj:
*/

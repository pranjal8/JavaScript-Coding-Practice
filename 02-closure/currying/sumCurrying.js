function curry(f) {
  //f = sum
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum);
console.log(curriedSum());

/* 
    curriedSum = return function(a){
        // a=1;
        return function(b){
            return f(a,b)
        }
    }
*/

let addOne = curriedSum(1);
let addTwo = addOne(2);

console.log(addTwo);

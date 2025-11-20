function Counter() {
  let count = 0;
  this.up = function () {
    ++count;
    return this; // Return the Counter object for chaining
  };
  this.down = function () {
    --count;
    return this; // Return the Counter object for chaining
  };
  this.getValue = function () {
    return count; // Helper method to get the current count
  };
}

let c = new Counter();
console.log(c.up().up().up().getValue()); // 3
console.log(c.down().getValue()); // 2

/* 
If you want to chain calls like c.up().up().up(), the methods must return this (the Counter object) instead of the count value:
*/
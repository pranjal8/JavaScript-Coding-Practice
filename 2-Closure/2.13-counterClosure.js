function createCounter(init) {
  let count = init;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset: function () {
      count = init;
      return count;
    },
  };
}

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset()); // 5


/* 

function createCounter(init) {
  let count = init;

  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }

  function reset() {
    count = init;
    return count;
  }

  return {
    increment,
    decrement,
    reset,
  };
} 
  
*/

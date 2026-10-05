function slow(x) {
  console.log("First Call: ", x);
  return x;
}

let worker = {
  someMethod() {
    return 10;
  },
  slow(x) {
    console.log("Called with: " + x);
    return x * this.someMethod();
  },
};

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    // let result = func(x);
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);
console.log(slow(5));
console.log(slow(5));
console.log(slow(15));

let cachedSlow = cachingDecorator(slow);
console.log(cachedSlow(5));
console.log(cachedSlow(5));
console.log(cachedSlow(5));
console.log(cachedSlow(10));

worker.slow = cachingDecorator(worker.slow);
console.log(worker.slow(3));
console.log(worker.slow(3));

function sum(x) {
  return function (y) {
    return x + y;
  };
}

const result = sum(4)(5);
console.log(result);

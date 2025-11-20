let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo= multiply;
multiplyByTwo(2)(5);

let multiplyByThree = multiply(3)(7)

let multiplyByFour = multiply(4);
multiplyByFour(10)

multiply(5)(3);
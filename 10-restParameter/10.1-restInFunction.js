function sumAll(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sumAll[(1, 2, 3)]);

function showName(firstName, lastName, ...rest) {
  console.log(`firstName: ${firstName}, lastName: ${lastName}`);
  console.log(rest);
}

showName(["John", "smith", "Imperator", "Consul"]);



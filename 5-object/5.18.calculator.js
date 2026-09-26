let calculator = {
  read() {
    this.a = +prompt("Enter first number", 0);
    this.b = +prompt("Enter last number", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();

console.log("Sum of two:" , calculator.sum());
console.log("Multiplication of two" , calculator.mul());

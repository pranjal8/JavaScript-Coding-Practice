function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const obj = new Person("Pranjal");

console.log(obj.name);
obj.greet();

console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("greet"));






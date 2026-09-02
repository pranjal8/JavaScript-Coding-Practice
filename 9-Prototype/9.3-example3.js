const obj = {
  name: "Pranjal",
  greet() {
    console.log(`Hello , ${this.name}`);
  },
};

console.log(obj);  //{ name: 'Pranjal', greet: [Function: greet] }
console.log(obj.__proto__ === Object.prototype);  //true

console.log(Object.prototype.__proto__); //null
console.log(Object.getPrototypeOf(obj)); //[Object: null prototype] {}

console.log(obj.hasOwnProperty("name")); //true


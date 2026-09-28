const user = {
  name: "Tyler",
  age: 27,
  greet() {

    /* 
    inside the greet method, the JavaScript interpreter changes this to user.
    console.log(`Hello, my name is ${this.name}`)
    */
    console.log(`Hello, my name is ${this.name}`);
  },
  mother: {
    name: "Stacey",
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  },
};

user.greet(); //Tyler
user.mother.greet(); //Stacey
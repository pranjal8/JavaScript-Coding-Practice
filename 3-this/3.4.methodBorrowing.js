const person1 = {
  name: "Pranjal",

  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

const person2 = {
  name: "Tyler",
};

person1.greet.call(person2); // Hello, Tyler

/* 

person2 doesn't have a greet() method, but it can borrow person1.greet().
The important part is:
person1.greet.call(person2);
So inside greet():
this === person2

*/

let user = {
  name: "John",
  age: 30,

  sayBye: function () {
    console.log("Bye");
  },

  Hello(){
    console.log("Hello!" , this.name)
  }
};

//assign function to the property of object.
user.sayHi = function () {
  console.log("Hi!");
};

user.sayHi();



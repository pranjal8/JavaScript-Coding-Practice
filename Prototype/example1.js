const animal = {
  eats: true,
  walk() {
    console.log("Walk");
  },
};
const rabbit = {
  jump: true,
  __proto__: animal,
};

//  rabbit.__proto__ = animal      //  sets rabbit.[[Prototype]] = animal

const longEar = {
  longEar: true,
  __proto__: rabbit,
};

console.log(longEar.walk());
console.log(animal.eats, rabbit.eats);
console.log(rabbit.walk());

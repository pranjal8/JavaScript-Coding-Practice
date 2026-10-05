let original = {
  name: "John",
  age: 30
};

let copy = { ...original };

console.log(copy);
// { name: "John", age: 30 }

console.log(original === copy); // false
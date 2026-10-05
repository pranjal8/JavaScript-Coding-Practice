let user = {
  name: "John",
  age: 30,
};

for (let value of Object.values(user)) {
  console.log(value);
  /* 
   John 
   30
  */
}

console.log(Object.values(user)); // [ 'John', 30 ]
console.log(Object.entries(user)); // [ [ 'name', 'John' ], [ 'age', 30 ] ]
console.log(Object.keys(user)); // [ 'name', 'age' ]

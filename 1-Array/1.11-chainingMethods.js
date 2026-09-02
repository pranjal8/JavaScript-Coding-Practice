const users = [
  { name: "Alice", age: 25, isAdmin: true },
  { name: "Bob", age: 17, isAdmin: false },
  { name: "Charlie", age: 30, isAdmin: false },
];

// Task: Get names of all adults
const names = users
  .filter((user) => user.age >= 18) // Step 1: Filter
  .map((user) => user.name); // Step 2: Transform

console.log(names);

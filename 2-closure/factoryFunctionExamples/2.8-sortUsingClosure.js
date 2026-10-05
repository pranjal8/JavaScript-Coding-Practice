let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function sortField(field) {
  return (a, b) => {
    return a[field] > b[field] ? 1 : -1;
  };
}

const result = users.sort(sortByName("age"))
console.log(result)
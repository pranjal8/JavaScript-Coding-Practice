const list = [
  {
    id: 1,
    name: "Steve",
    email: "steve@example.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 3,
    name: "Jony",
    email: "jony@example.com",
  },
  {
    id: 4,
    name: "marry",
    email: "marry@example.com",
  },
];

const noJohn = list.filter((item) => {
  //it's not reusable because you are hardcoding the name
  return item.name !== "John";
});
console.log(noJohn);


// Currying
const filtering = (name) => (item) => item.name !== name;
const filterByName = (list, name) => {
  return list.filter(filtering(name));
};
console.log(filterByName(list, "Jony"));

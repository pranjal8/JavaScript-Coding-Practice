let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

const newUser = users.map((item) => {
  //Explicit return
  return {
    id: item.id,
    fullName: `${item.name} ${item.surname}`,
  };
});

console.log(newUser);

const newUser2 = users.map((item) =>
  //implicit return
  ({
    id: item.id,
    fullName: `${item.name} ${item.surname}`,
  })
);
console.log(newUser2)

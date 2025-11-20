// Print all the persons, who's age is 18 or above 18, in ascending order according to their age & then based on last character of name.
// Expected Output
// ["Rahul", "Raj", "Ajay", "Brijesh", "Arjun"];
// ["Brijesh", "Raj", "Rahul", "Arjun", "Ajay"];

const Persons = {
  Rahul: 18,
  Raj: 19,
  Kunal: 9,
  Abhi: 17,
  Ajay: 25,
  Arjun: 68,
  Brijesh: 32,
};

const p = Object.entries(Persons);
let result = [];

for (let [key, val] of p) {
  if (val >= 18) {
    result.push(key);
  }
}

const ans = [...result].sort((a, b) => {
  const lastCharA = a.slice(-1).toLocaleLowerCase();
  const lastCharB = b.slice(-1).toLocaleLowerCase();
  return lastCharA.localeCompare(lastCharB);
});

console.log(result);
console.log(ans);

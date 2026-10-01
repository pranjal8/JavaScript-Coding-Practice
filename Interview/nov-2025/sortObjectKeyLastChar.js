/* 

    ## Problem Statement:
    Print all the persons whose age is **18 or above 18**, in:
    1. Ascending order according to their **age**
    2. Then based on the **last character of their name**

    ### Input
    const Persons = {
      Rahul: 18,
      Raj: 19,
      Kunal: 9,
      Abhi: 17,
      Ajay: 25,
      Arjun: 68,
      Brijesh: 32,
    };

    ### Expected Output
    ["Rahul", "Raj", "Ajay", "Brijesh", "Arjun"];
    ["Brijesh", "Raj", "Rahul", "Arjun", "Ajay"];

 */




const Persons = {
  Rahul: 18,
  Raj: 19,
  Kunal: 9,
  Abhi: 17,
  Ajay: 25,
  Arjun: 68,
  Brijesh: 32,
};

const result = Object.entries(Persons)
  .filter(([name, age]) => age >= 18)
  .sort((a, b) => {
    // First: sort by age in ascending order
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }

    // Second: if age is same, sort by last character of name
    return a[0].slice(-1).localeCompare(b[0].slice(-1));
  })
  .map(([name]) => name);

console.log(result);


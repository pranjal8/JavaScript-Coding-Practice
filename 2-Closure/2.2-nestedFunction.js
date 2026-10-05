function sayHiBye(first, last) {
  function getFullName() {
    return first + " " + last;
  }

  console.log("Hello", getFullName());

  //or
  return {
    getName: getFullName,
  };
}
const person = sayHiBye("John", "Smith");
console.log(person);
person.getName();


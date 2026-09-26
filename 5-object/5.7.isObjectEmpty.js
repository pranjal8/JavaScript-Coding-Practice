//Using Object.entries()
function isEmpty(obj) {
  return Object.entries(obj).length === 0;
}
const myObj = {};
console.log(isEmpty(myObj)); // true
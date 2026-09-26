//Using JSON.stringify()
function isEmpty(obj) {
  return JSON.stringify(obj) === '{}';
}
const myObj = {};
console.log(isEmpty(myObj)); // true


//Using Object.entries()
/* function isEmpty(obj) {
  return Object.entries(obj).length === 0;
}
const myObj = {};
console.log(isEmpty(myObj)); // true */
  //Using a for...in loop
  function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
const myObj = {};
console.log(isEmpty(myObj)); // true


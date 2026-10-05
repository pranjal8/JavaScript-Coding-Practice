/* 
    Question:
    Let arr be an array.
    Create a function unique(arr) that should return an array with unique items of arr.
*/

function uniques(arr) {
  let result = [];
  for (let i of arr) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(uniques(values));

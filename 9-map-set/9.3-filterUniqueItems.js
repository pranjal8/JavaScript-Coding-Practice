/* 
    Question:
    Let arr be an array.
    Create a function unique(arr) that should return an array with unique items of arr.
*/

function unique(arr) {
  let set = new Set();
  for (let item of arr) {
    set.add(item);
  }
  return set;
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

console.log(unique(values));

/* 
    Set automatically stores only unique values. 
    When adding a value that already exists, 
    the Set remains unchanged.
    
*/

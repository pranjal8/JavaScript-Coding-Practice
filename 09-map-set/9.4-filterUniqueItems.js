/* 
    Question:
    Let arr be an array.
    Create a function unique(arr) that should return an array with unique items of arr.
*/

function unique(arr) {
  return new Set(arr); //Set(3) {"Hare", "Krishna", ":-O"}

  // If you want an Array as the result.
  // return [...new Set(arr)];   //["Hare", "Krishna", ":-O"]

  //return Array.from(new Set(arr));  //["Hare", "Krishna", ":-O"]
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
    new Set(arr)
    //Take the  each element from  iterable and put them into the Set. 
    // Remove duplicates.
*/

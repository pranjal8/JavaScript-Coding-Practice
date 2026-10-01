/* 
    Problem Statement:
    Given two arrays of names, determine whether the two arrays have at least one common name.
    Return true if at least one name exists in both arrays; otherwise, return false.
*/

// arr1 = ["name1", "name2", "name3"];
// arr2 = ["name5", "name4", "name1"];
// function isSameName(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       return arr1.includes(arr2[j]);
//     }
//   }
// }
// const res = isSameName(arr1, arr2);
// console.log(res); //false

const arr1 = ["name1", "name2", "name3"];
const arr2 = ["name5", "name4", ];

////Approach 1: correct solution using includes()
function isSameName(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      return true;
    }
  }

  return false;
}

const res = isSameName(arr1, arr2);

console.log(res); // true

/* Approach 2: if they ask for optimal time complexity, there is an even better approach 
using a Set, especially when the arrays are large: 
This gives approximately O(n + m) time instead of repeatedly scanning arr1.
 */
function isSameName(arr1, arr2) {
  const names = new Set(arr1);

  return arr2.some((name) => names.has(name));
}

console.log(isSameName(arr1, arr2)); // true

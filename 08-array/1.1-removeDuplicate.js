function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// [1,2,2,3] → [1,2,3]

console.log(removeDuplicates([1,2,2,3]));

/* 
new Set(arr) returns a Set object, not an array.
But usually we want the result as an array.

The spread operator ... expands the Set into individual values:
*/
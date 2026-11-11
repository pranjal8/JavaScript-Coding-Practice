// approach 1:
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = arr.filter((item, index) => {
  console.log(arr.indexOf(item), index);
  return arr.indexOf(item) === index;
});
console.log(uniqueArr); // [1, 2, 3, 4]

// approach 2:
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// [1,2,2,3] → [1,2,3]

console.log(removeDuplicates([1, 2, 2, 3]));

/* 
new Set(arr) returns a Set object, not an array.
But usually we want the result as an array.

The spread operator ... expands the Set into individual values:
*/

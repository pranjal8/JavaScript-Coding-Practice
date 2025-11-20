function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// [1,2,2,3] → [1,2,3]

console.log(removeDuplicates([1,2,2,3]));

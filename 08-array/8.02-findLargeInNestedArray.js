// Approach 1:
function findLargest(arr) {
  const flat = arr.flat(Infinity);
  return Math.max(...flat);
}
console.log(findLargest([1, [5, 9], 3])); // 9

//************************************ */

// Approach 2:
function findLargeNum(nestedArray) {
  let max = -Infinity;

  function findMax(subArray) {
    for (let i = 0; i < subArray.length; i++) {
      let value = subArray[i];

      if (Array.isArray(value)) {
        console.log(typeof value, value, Array.isArray(value));
        findMax(value);
      } else if (typeof value === "number") {
        console.log(typeof value, value);

        if (value > max) {
          max = value;
        }
      }
    }
  }

  findMax(nestedArray);
  return max;
}

const nestedArray = [1, [2, [30, [4, 50]], 6], [7, 8], 9];
const largest = findLargeNum(nestedArray);
console.log("Largest element is:", largest); // Output: 50

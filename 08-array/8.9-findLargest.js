let numbers = [1, 2, 21, 11, 0, -4, 10, 45];

function findLargest(num) {
  let largest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }
  }
  return largest;
}

const result = findLargest(numbers);
console.log(result);

/**
 *   Number.NEGATIVE_INFINITY === -Infinity; // true
 *
 *   Initialize with Negative Infinity
 *   If you prefer to loop through the entire array from index 0, or if you need a placeholder before processing,
 *   initialize your tracker to negative infinity (or the lowest possible minimum integer value for your specific programming language).
 *   Since any actual number in the array will be greater than negative infinity, the first comparison will immediately overwrite it.
 */

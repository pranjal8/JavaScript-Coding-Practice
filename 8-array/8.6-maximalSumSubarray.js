/* Approach 2 --> O(n) */

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArraySum2(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (const item of arr) {
    partialSum = partialSum + item;

    maxSum = Math.max(maxSum, partialSum);

    if (partialSum < 0) {
      partialSum = 0;
    }
  }
  return maxSum;
}


/* 
  Question:
  The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
  The task is: find the contiguous subarray of arr with the maximal sum of items.
  Write the function getMaxSubSum(arr) that will return that sum.
*/
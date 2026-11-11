/**
 *  Given an unsorted array arr[] containing both positive and negative integers, rearrange the array such that all negative elements are moved to the right side (end) of the array.
 *  The relative order of both positive and negative elements must remain unchanged.
 *  Note: Modify the original array in-place. Do not return a new array.
 *
 *  Time Complexity: O(n) , Auxiliary Space: O(n)
 */

const numbers = [1, -1, 3, 2, -7, -5, 11, 6];

function moveToRight(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      result.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = result[i];
  }

  return arr;
}
const result = moveToRight(numbers);
console.log(result);

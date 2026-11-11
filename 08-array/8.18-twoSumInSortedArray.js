let numbers = [2, 7, 11, 15];
let target = 9;

function twoSumInSortedArray(arr, target) {
  if (arr.length < 2) return [];

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
const result = twoSumInSortedArray(numbers, target);
console.log(result);

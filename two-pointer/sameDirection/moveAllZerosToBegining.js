// Approach 1:  Two pointer (Same direction) -> Overwriting
// Time complexity: O(n) , Auxiliary Space: O(1)

const nums = [2, 0, 7, 0, 5, 1];

function moveZeros(arr) {
  let left = arr.length - 1;

  for (let right = arr.length - 1; right >= 0; right--) {
    if (arr[right] !== 0) {
      arr[left] = arr[right];
      left--;
    }
  }

  while (left >= 0) {
    arr[left] = 0;
    left--;
  }

  return arr;
}

const result = moveZeros(nums);
console.log(result);

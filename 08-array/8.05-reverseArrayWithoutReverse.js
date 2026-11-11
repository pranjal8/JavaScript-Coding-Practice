// Approach 1 : Using new array --> Time: O(n) , Auxiliary space: O(n) ; We create another array to store the reversed elements.

let numbers = [50, 40, 30, 20, 10];

function reverseArray(arr) {
  let reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

const result = reverseArray(numbers);
console.log(result);

// Approach 2: Using Two Pointers -->  Time: O(n) , Auxiliary space: O(1)   ; Instead of creating another array, we can swap elements inside the original array.
function reverseArrayWithTwoPointer(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = num[left];

    num[left] = num[right];
    num[right] = temp;

    left++;
    right--;
  }

  return arr;
}

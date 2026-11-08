let numbers = [1, 2, 21, 11, 0, -4, 10, 45];

// [-10, -5, -20, -3, -15]
// [5, 5, 5, 5]
// [10, 20]

function findThirdLargest(num) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = num[i];
    } else if (num[i] < largest && num[i] > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = num[i];
    } else if (num[i] < secondLargest && num[i] > thirdLargest) {
      thirdLargest = num[i];
    }
  }

  return thirdLargest === -Infinity ? null : thirdLargest;
}

const result = findThirdLargest(numbers);
console.log(result);

let numbers = [1, 2, 21, 11, 0, -4, 10, 45];

function findSecondLargest(num) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
      secondLargest = largest;
      largest = num[i];
    } else if (num[i] < largest && num[i] > secondLargest) {
      //find a number smaller than largest but greater than secondLargest
      secondLargest = num[i];
    }
  }

  return secondLargest;
}

const result = findSecondLargest(numbers);
console.log(result);

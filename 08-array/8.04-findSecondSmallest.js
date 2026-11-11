let numbers = [1, 2, 21, 11, 0, -4, 10, 45];

function findSecondSmallest(num) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < num.length; i++) {
    if (num[i] < smallest) {
      secondSmallest = smallest;
      smallest = num[i];
    } else if (num[i] > smallest && num[i] < secondSmallest) {
      secondSmallest = num[i];
    }
  }

  return secondSmallest;
}

const result = findSecondSmallest(numbers);
console.log(result);

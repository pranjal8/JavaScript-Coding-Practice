let numbers = [1, 2, 21, 11, 0, -4, 10, 45];

function findSmallest(num) {
  let smallest = Number.POSITIVE_INFINITY;

  for (let i = 0; i < num.length; i++) {
    if (num[i] < smallest) {
      smallest = num[i];
    }
  }
  return smallest;
}

const result = findSmallest(numbers);
console.log(result);

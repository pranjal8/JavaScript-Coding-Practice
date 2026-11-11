const numbers = [2, 3, 4, 5];
function findMissingNumber(arr) {
  const lastNum = arr.length + 1;
  const expectedSum = (lastNum * (lastNum + 1)) / 2;

  const actualSum = arr.reduce((acc, currentItem) => {
    return (acc += currentItem);
  }, 0);

  return expectedSum - actualSum;
}

const result = findMissingNumber(numbers);
console.log(result);

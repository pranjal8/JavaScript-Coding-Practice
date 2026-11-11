let numbers = [1, 4, 5, 2, 3, 7, 8];

function findAverage(nums) {
  if (nums.length === 0) return 0;
  let length = nums.length;

  let sum = nums.reduce((acc, current) => {
    return (acc += current);
  }, 0);

  return Math.floor(sum / length);
}

const result = findAverage(numbers);
console.log(result);

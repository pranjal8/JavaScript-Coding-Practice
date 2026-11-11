let numbers = [1, 4, 5, 2, 3, 7, 8];

function countEvenOdd(nums) {
  const obj = {
    even: 0,
    odd: 0,
  };

  for (let item of nums) {
    if (item % 2 === 0) {
      obj.even = obj["even"] + 1;
    } else {
      obj.odd++;
    }
  }
  return obj;
}

const result = countEvenOdd(numbers);
console.log(result);

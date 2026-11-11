// [1, 2, 3, 2, 4, 1, 5];
// [4, 5, 4, 5, 6, 6]
// []
// [10, 20, 30, 10, 20]
// [1, 2, 3, 4, 5]

const nums = [1, 1, 1, 1];
function findDuplicates(arr) {
  if (arr.length === 0) return [];

  const seen = new Set();
  const duplicate = new Set();

  for (let item of arr) {
    if (seen.has(item)) {
      duplicate.add(item);
    }
    seen.add(item);
  }
  return [...duplicate];
}

const result = findDuplicates(nums);
console.log(result);

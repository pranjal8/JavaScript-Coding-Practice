const numbers = [3, 2, 4, 1, 2, 5, 2, 7, 11, 15];
const target = 9;

function twoSumInUnsortedArray(arr, target) {
  if (arr.length < 2) return [];

  const map = new Map();

  for (let item = 0; item < arr.length; item++) {
    const complement = target - arr[item];

    if (map.has(complement)) {
      return [item, map.get(complement)];
    }
    map.set(arr[item], item);
  }
  return [];
}
const result = twoSumInUnsortedArray(numbers, target);
console.log("Indexex of element: ", result);

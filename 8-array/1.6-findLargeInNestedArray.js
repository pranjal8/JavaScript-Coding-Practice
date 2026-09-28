function findLargest(arr) {
  const flat = arr.flat(Infinity);
  return Math.max(...flat);
}

console.log(findLargest([1, [5, 9], 3])); // 9

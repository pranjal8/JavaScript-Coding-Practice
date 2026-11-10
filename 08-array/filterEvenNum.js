function evenNumber(arr) {
  return arr.filter((item) => item % 2 == 0);
}

const res = evenNumber([1, 2, 3, 4, 5, 6]);
console.log(res);

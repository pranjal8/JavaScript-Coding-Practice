const arr = [1, 2, 2, 3, 4, 4];

const uniqueArr = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});

console.log(uniqueArr); // [1, 2, 3, 4]
// Input: [1,2,3,4] Output: 10 
const arr = [1, 2, 3, 4];

const sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10



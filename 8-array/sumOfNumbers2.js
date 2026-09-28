const arr = [1, 100, 22, 'abc', '33'];

const sum = arr.reduce((acc, item) => {
  // Convert item to number and check if it's a valid number
  const num = Number(item);
  return !isNaN(num) ? acc + num : acc;
}, 0);

console.log(sum); // Output: 156 (1 + 100 + 22 + 33)


//Approach 2
/* const arr = [1, 100, 22, 'abc', '33'];

const sum = arr
  .filter(item => !isNaN(Number(item))) // Filter valid numbers
  .map(Number) // Convert to numbers
  .reduce((acc, num) => acc + num, 0); // Sum

console.log(sum); // Output: 156 */
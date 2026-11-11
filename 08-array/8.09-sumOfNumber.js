//Approach 1:
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10

//************************************ */
// Approach 2:
let sum2 = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" || !isNaN(Number(arr[i]))) {
    sum2 += Number(arr[i]);
  }
}

console.log(sum2); // Output: 156

//************************************ */
// Approach 3:
const array = [1, 100, 22, "abc", "33"];

const sum3 = arr.reduce((acc, item) => {
  // Convert item to number and check if it's a valid number
  const num = Number(item);
  return !isNaN(num) ? acc + num : acc;
}, 0);

console.log(sum3); // Output: 156 (1 + 100 + 22 + 33)

//************************************ */
//Approach 4:
const sum4 = arr
  .filter((item) => !isNaN(Number(item))) // Filter valid numbers
  .map(Number) // Convert to numbers
  .reduce((acc, num) => acc + num, 0); // Sum

console.log(sum4); // Output: 156 */

//************************************ */
//Approach 5:
let sum5 = 0;
for (let i = 0; i < arr.length; i++) {
  const num = Number(arr[i]);
  if (!isNaN(num)) {
    sum5 += num;
  }
}

console.log(sum5); // Output: 156 (1 + 100 + 22 + 33)

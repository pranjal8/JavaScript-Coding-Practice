let number = 5;

function findFactorial(num) {
  if (!Number.isInteger(num) || num < 0) {
    return "Invalid input";
  }
  if (num === 0) return 1; //base case

  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}
const result = findFactorial(number);
console.log(result);

/**
 * Definition: Multiply the number by every whole number below it down to 1.
 * Base case 0! = 1
 * Recursive factorial formula : n*(n-1)!
 */

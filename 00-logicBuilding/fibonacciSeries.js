let number = 8;

function generateFibonacci(num) {
  let first = 0,
    second = 1;

  let series = [];

  for (let i = 0; i < num; i++) {
    series.push(first);

    let nextNumber = first + second;
    first = second;
    second = nextNumber;
  }
  return series;
}

const result = generateFibonacci(number);
console.log(result);

/**
 *
 *  The Fibonacci series is a sequence of numbers where each number is the sum of the previous two numbers.
 *  The series starts with: 0,1
 *
 *  Formula : F(n) = F(n-1) + F(n-2)
 */

function findNumberAtPosition(num) {
  let first = 0,
    second = 1;

  for (let i = 0; i < num; i++) {
    let next = first + second;
    first = second;
    second = next;
  }
  return first;
}
console.log(findNumberAtPosition(6)); // 8

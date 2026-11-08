let number = 1234;
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
const result = isPrime(number);
console.log(result);

/**
 * A Prime number is a number that: Is greater than 1, and is divisible only by 1 and itself.
 *
 * A prime number must:
 * 1. Be greater than 1.
 * 2. Have exactly two factors: 1 and itself.
 *
 * Every number is divisible by 1. We don't need to check it.
 * Every number is divisible by itself. We don't need to check that either.
 *
 * If a number has a divisor greater than its square root, it must also have a corresponding divisor smaller than its square root.
 */

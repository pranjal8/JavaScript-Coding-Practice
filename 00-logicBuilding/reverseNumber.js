let number = 123456;

function reversedNumber(num) {
  let reversed = 0;

  while (num !== 0) {
    const lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.trunc(num / 10);
  }

  return reversed;
}

const result = reversedNumber(number);
console.log(result);

/**
 *  Modulus (%) --> Get the last digit (when you divide a number by 10, the remainder is its last digit eg.12345/10 --> quotient 1234 , remainder 5)
 *
 *  Multiplication (*) --> Make space for the next digit. eg.44 want to add 3 , 44*10 = 440 , 440+3 = 443
 *
 *  Division (/) --> Remove the last digit
 *
 *
 *
 * const means you cannot reassign the variable.
 * let means you can reassign the variable.
 * Each loop iteration creates a new block scope, so a new lastDigit is created.
 */

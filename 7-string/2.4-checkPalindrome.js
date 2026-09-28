function isPalindrome(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return str === reversed;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("nitin")); // true
console.log(isPalindrome("Rama")); // false
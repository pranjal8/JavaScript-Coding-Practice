function isPalindrome(str) {
  let j = str.length - 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[j]) return false;

    j--;
  }
  return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("nitin"));
console.log(isPalindrome("Rama"));

// Approach 2:
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

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // remove spaces & punctuation
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("No lemon, no melon")); // true

//toLowerCase() → make comparison case-insensitive
//replace(/[^a-z0-9]/g, "") → keep only alphanumeric characters
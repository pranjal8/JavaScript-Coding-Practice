/* 
Input: "leetcode"
Output: 0 (l is the first non-repeating character)
Input: "loveleetcode"
Output: 2 (v is the first non-repeating character)
*/

// Input: “stress" Output: “t"

//Approach 2: Using Map
function firstNonRepeatingChar(str) {
  const charMap = new Map();

  for (let char of str.toLowerCase()) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  for (let [key, value] of charMap) {
    if (value === 1) {
      return key;
    }
  }
  console.log(charMap);
  return null;
}

console.log(firstNonRepeatingChar("aabbcdee"));
console.log(firstNonRepeatingChar("xxyz")); // Output: "y"
console.log(firstNonRepeatingChar("aabbcc"));

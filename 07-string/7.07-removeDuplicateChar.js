/* 
Input: "aabbccd" → Output: "abcd"
Input: "programming" → Output: "progamin"
*/

function removeDuplicates(str) {
  return [...new Set(str)].join("");
}

console.log(removeDuplicates("aabbccd")); // "abcd"
console.log(removeDuplicates("programming")); // "progamin"
console.log(removeDuplicates("aaaa")); // "a"
console.log(removeDuplicates("abcabc")); // "abc"
console.log(removeDuplicates("")); // ""
console.log(removeDuplicates("Javascript")); // "Javscript"

// Approach 2:
function removeDuplicates(str) {
  let result = "";
  for (let char of str) {
    if (result.indexOf(char) === -1) {
      result += char;
    }
  }
  return result;
}

// Approach 3:
function removeDuplicates(str) {
  let result = "";
  const seen = new Set();

  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }
  return result;
}

/* 
Input: "aabbccd" → Output: "abcd"
Input: "programming" → Output: "progamin"
*/

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

console.log(removeDuplicates("aabbccd")); // "abcd"
console.log(removeDuplicates("programming")); // "progamin"
console.log(removeDuplicates("aaaa")); // "a"
console.log(removeDuplicates("abcabc")); // "abc"
console.log(removeDuplicates("")); // ""
console.log(removeDuplicates("Javascript")); // "Javscript"

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

/* 
Input: "aabbccd" → Output: "abcd"
Input: "programming" → Output: "progamin"
*/

function removeDuplicates(str) {
  let result = "";
  for (let char of str) {
    if (result.indexOf(char) === -1) {
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

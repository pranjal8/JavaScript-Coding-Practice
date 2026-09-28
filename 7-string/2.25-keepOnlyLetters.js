/* 
Remove all characters except alphabets  Input: “he!!l@o122" Output: “helo"
*/

function keepOnlyLetters(str) {
  let result = '';
  for (let char of str) {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      result += char;
    }
  }
  return result;
}
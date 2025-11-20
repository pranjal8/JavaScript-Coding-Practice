/* 
Remove all characters except alphabets  Input: “he!!l@o122" Output: “helo"
*/

function keepOnlyLetters(str) {
  return str.replace(/[^a-zA-Z]/g, "");
}

// One-liner (most used in real projects)
const keepOnlyLetters = (str) => str.replace(/[^a-zA-Z]/g, "");

// Test
console.log(keepOnlyLetters("he!!l@o122")); // "hello"
console.log(keepOnlyLetters("JavaScript123!!!")); // "JavaScript"
console.log(keepOnlyLetters("123456")); // ""
console.log(keepOnlyLetters("Hello World!!!")); // "HelloWorld"

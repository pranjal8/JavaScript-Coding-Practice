/* 
Convert first letter of every word to uppercase  Input: "hello world”  Output: "Hello World"
*/

function toTitleCase(str) {
  return str
    .toLowerCase() // make everything lowercase first
    .split(" ") // split into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Test
console.log(toTitleCase("hello world")); // "Hello World"
console.log(toTitleCase("JAVA is FUN")); // "Java Is Fun"
console.log(toTitleCase("the quick brown fox")); // "The Quick Brown Fox"

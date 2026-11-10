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

/********************************** */

// Approach 2:
function ucFirst(str) {
  if (!str) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("hello"));
console.log("Falsy value: ", JSON.stringify(ucFirst("")));

/* 
    We can’t “replace” the first character, because strings in JavaScript are immutable.
    But we can make a new string based on the existing one, with the uppercased first character:
*/
/* 
The "" is just invisible because it contains zero characters.
JSON.stringify() converts a JavaScript value into a string representation that makes invisible things visible.

In your case, that's useful because "" is an empty string.
*/

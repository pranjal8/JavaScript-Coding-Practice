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

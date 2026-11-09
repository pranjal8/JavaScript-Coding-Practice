/* 
Reverse each word in a sentence. Input: "hello world” Output: "olleh dlrow”
*/

function reverseWords(sentence) {
  return sentence
    .split(" ") // split into words
    .map((word) => word.split("").reverse().join("")) // reverse each word
    .join(" "); // join back with space
}

// Test
console.log(reverseWords("hello world")); // "olleh dlrow"
console.log(reverseWords("I love JavaScript")); // "I evol tpircSavaJ"
console.log(reverseWords("Hi")); // "iH"

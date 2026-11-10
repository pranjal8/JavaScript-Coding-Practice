/* //Reverse the characters of each individual word
Reverse each word in a sentence. Input: "hello world” Output: "olleh dlrow”
*/

// Approach 1:
function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversedWords = [];

  for (let word of words) {
    reversedWords.push(word.split("").reverse().join(""));
  }

  return reversedWords.join(" ");
}

// Approach 2:
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

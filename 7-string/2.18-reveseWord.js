/* 
Reverse each word in a sentence. Input: "hello world” Output: "olleh dlrow”
*/

function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversedWords = [];

  for (let word of words) {
    reversedWords.push(word.split("").reverse().join(""));
  }

  return reversedWords.join(" ");
}

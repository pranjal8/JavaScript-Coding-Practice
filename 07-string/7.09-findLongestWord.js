function longestWord(sentence) {
  const words = sentence.trim().split(" ");
  let longest = "";
   //console.log(words);
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }

  return longest;
}

// Test
console.log(longestWord("I love programming")); // "programming"
console.log(longestWord("The quick brown fox")); // "quick"
console.log(longestWord("JavaScript is awesome!!!")); // "JavaScript"

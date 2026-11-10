/* 
Find the most frequent character Input: “javascript" Output: "a" or "j" depending on logic. 
*/

function mostFrequentChar(str) {
  if (!str) return '';
  
  const count = {};
  
  // Count frequency
  for (let char of str.toLowerCase()) {
    count[char] = (count[char] || 0) + 1;
  }
  
  // Find char with max count
  let maxChar = '';
  let maxCount = 0;
  
  for (let char in count) {
    if (count[char] > maxCount) {
      maxCount = count[char];
      maxChar = char;
    }
  }
  
  return maxChar;
}

// Test
console.log(mostFrequentChar("javascript"));  // "a" (appears 2 times)
console.log(mostFrequentChar("aabbccc"));     // "c"
console.log(mostFrequentChar("hello"));       // "l"
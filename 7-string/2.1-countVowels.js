function countVowels(str) {
  let vowel = "aeiouAEIOU";
  let count = 0;

  for(let char of str){
    if(vowel.includes(char)){
        count++;
    }
  }

  return count;
}
let ans = countVowels("hello")
console.log(ans)

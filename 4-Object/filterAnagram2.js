let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let result = [];
  let seen = []; // To keep track of sorted words we've already encountered

  for (let word of arr) {
    let sortedWord = word.toLowerCase().split("").sort().join("");
    console.log(sortedWord);
    if (!seen.includes(sortedWord)) {
      seen.push(sortedWord);
      result.push(word);
    }
  }

  return result;
}

const res = aclean(arr);
console.log(res);

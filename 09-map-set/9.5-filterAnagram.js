/* 
Write a function aclean(arr) that returns an array cleaned from anagrams.
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
From every anagram group should remain only one word, no matter which one.
*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {

   let map = new Map();

    for(let i=0; i< arr.length; i++){
        let sortedWord = arr[i].toLowerCase().split('').sort().join("");
       
        if(!map.has(sortedWord)){
           map.set(sortedWord, arr[i])
        }
    }
    return Array.from(map.values());
}

console.log(aclean(arr)); //[ 'nap', 'teachers', 'ear' ]

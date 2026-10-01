/* 
    Problem Statement:
    Given a string containing multiple words, reverse the order of the words while keeping the characters within each word unchanged.

    Input:
    hello world

    Output:
    world hello

    Example:
    Input:  "I love JavaScript"
    Output: "JavaScript love I"
*/

function reverseOrder(str) {
  let arr = str.split(" ");

  return arr.reverse().join(" ");
}

const res = reverseOrder("hello world");

console.log(res);


//Without reverse()
function reverseOrderWithoutReverse(str) {
  let arr = str.split(" ");
  let res = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    res += arr[i];

    if (i !== 0) {
      res += " ";
    }
  }

  return res;
}

console.log(reverseOrderWithoutReverse("hello world"));

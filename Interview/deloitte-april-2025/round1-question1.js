/* 

    Problem Statement:
    Write a JavaScript function add() that accepts any number of numeric arguments and 
    returns their total sum.
    The function should work whether the caller passes 3 numbers, 
    5 numbers, 10 numbers, etc.

    Input: 1, 2, 3, 4, 5

    Output: 15

    Example:
    add(1, 2, 3, 4, 5) → 15

*/

function add(a, b, c, ...d) {
  // let res = a + b + c;
  // for (let i = 0; i < d.length; i++) {
  //   res = res + d[i];
  // }
  // return res;

  let res = 0;
  console.log(arguments);
  for (const element of arguments) {
    res += element;
  }
  return res;
}

const ans = add(1, 2, 3, 4, 5);
console.log(ans);

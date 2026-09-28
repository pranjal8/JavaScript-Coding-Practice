/* 
Write a function checkSpam(str) 
that returns true 
if str contains ‘viagra’ or ‘XXX’, 
otherwise false
*/

function checkSpam(str) {
  if (str.includes("viagra") || str.includes("XXX")) {
    return true;
  }
  return false;
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

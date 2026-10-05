/* 
The default value also jumps in if the parameter exists, but strictly equals undefined
*/

function showMessage(from, text = "no text given") {
  console.log(from + ": " + text);
}
showMessage("Ana", undefined);

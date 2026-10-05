/* 
    Create an array styles with items “Jazz” and “Blues”.
    Append “Rock-n-Roll” to the end.
    Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
    Strip off the first value of the array and show it.
    Prepend Rap and Reggae to the array.
*/

let styles = ["Jazz", "Blues"];
console.log(styles.push("Rock-n-Roll"));

let middleIndex = Math.floor(styles.length-1  / 2);
styles[middleIndex] = "Classics";


styles.shift();
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles)

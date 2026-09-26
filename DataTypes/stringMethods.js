let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

let guestList = `Guest:
* John
* Pete
* Mary
`
console.log(guestList)
console.log(double.substring(5,2))

let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
console.log( str.slice(-4, -1) ); // 'gif'
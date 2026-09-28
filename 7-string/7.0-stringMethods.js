"use strict";

//Strings are immutable-> Can't be changed. create a whole new string and assign it to str
let str = "hi";
str = "H" + str[1];
console.log(str);

//Changing the case
console.log("Interface"[4].toUpperCase());
console.log("Interface".toLowerCase());

//searching for substring
let str2 = "Widget with id";
console.log(str2.indexOf("Widget"));
console.log(str2.indexOf("widget")); //not found return -1
console.log(str2.indexOf("id"));
console.log(str2.indexOf("id", 2));

//all occurrences of sunstring
let str3 = "As sly as a fox, as strong as an ox";
let target = "as";
let pos = 0;
while (true) {
  let foundPos = str3.indexOf(target, pos);
  if(foundPos === -1) break;

  console.log(`Found at: ${foundPos}`);
  pos = foundPos + 1;
}

//Getting substring
let str4='stringify';
console.log(str4.slice(4))
console.log(str4.slice(2,6))
console.log(str4.slice(-4,-1));

//string comparision

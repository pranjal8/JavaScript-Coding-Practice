/**
 * Problem Statement:
 * Write a function that takes a string as input and returns a new string with its characters in reverse order.
 * 
 * Input: "hello"
 * Output: "olleh"
 * 
 * Input: "Hello World!"
 * Output: "!dlroW olleH"
 * 
 * Input: "12345"
 * Output: "54321"
 */

let s = "GeeksforGeeks";

const ans = s.split("").reverse().join("");

const ans2 = [...s].reverse().join("");

console.log(ans2);
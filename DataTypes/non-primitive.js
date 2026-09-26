// Q1
let x = { value: 5 };
let y = x;
y.value = 10;
console.log(x.value); // 10  ← changed!

// Q2
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr2.push(4);

console.log(arr1, arr2);

// Q3
const a = { x: 1 };
a = { x: 2 };

const arr = [1, 100, 22, 'abc', '33'];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number' || !isNaN(Number(arr[i]))) {
    sum += Number(arr[i]);
  }
}

console.log(sum); // Output: 156



//Approach 2
/* const arr = [1, 100, 22, 'abc', '33'];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  const num = Number(arr[i]);
  if (!isNaN(num)) {
    sum += num;
  }
}

console.log(sum); // Output: 156 (1 + 100 + 22 + 33) */
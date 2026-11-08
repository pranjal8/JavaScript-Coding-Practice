let arr = ["a", "b"];

arr.push(function () {
  console.log(this);  // here -->  this === arr
});

arr[2](); //["a", "b", ƒ]
console.log(arr); //["a", "b", ƒ]

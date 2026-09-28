let arr = new Array(4);
console.log(arr.length, arr);

let arr1 = [
  "Apple",
  { name: "John" },
  true,
  function () {
    console.log("Hello!");
  },
];

arr1[arr1.length] = "Pineapple";
console.log(arr1, arr1.length);

for (let i = 0; i < arr1.length; i++) {
  console.log(i,": " + arr1[i]);
}

for(let items of arr1){
  console.log("items: ", items)
}

for(let index in arr1){
  console.log(`index: ${index},  value: ${arr1[index]}`)
}

let fruits=[];
fruits[123] = "Apple";
console.log(fruits.length)


console.log([1,2,3,4,5,6,7,8,9,0].toString());
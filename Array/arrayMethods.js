const array = [42];
const array1 = new Array(42, "Hello", "myVar", 3.14159);
const array2 = Array.of(9.6, 6.7);

let arr = ["I", "study", "JavaScript", "right", "now"];
let removedItems = arr.splice(1, 2);
console.log(arr, removedItems);

let fruits = ["Apple", "Orange", "Apple"];
console.log(fruits.indexOf("Apple"), fruits.lastIndexOf("Apple"));

let nanArray = [NaN];
console.log(nanArray.includes(NaN), nanArray.indexOf(NaN));

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

//The find method looks for a single (first) element that makes the function return true.
const res = users.find((item) => item.id < 3);

//but filter returns an array of all matching elements:
const res2 = users.filter((item) => item.id < 3);
console.log(res)
console.log(res2);

const nums=[1,8,3, 15,8] //sort()-->The items are sorted as strings by default.
console.log(nums.sort(
    function(a,b){
   return a-b
    }
))

console.log(nums.reverse())

let names = 'Bilbo, Gandalf, Nazgul';
let namesArr=['Bilbo', 'Gandalf', 'Nazgul']

console.log(names.split(', ') , names.split('', 4) );

console.log(namesArr.join('_'))
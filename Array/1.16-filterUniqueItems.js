function uniques(arr) {
   // return Array.from(new Set(arr) )

    let result =[]
    for(let i of arr){
        if(!result.includes(i)){
            result.push(i)
        }
    }
    return result;
}
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(uniques(values));

const arr = ["a", "b", "a", "c", "b"];

const frequency = arr.reduce(
  (acc, current) => {
    acc[current] = (acc[current] || 0 ) + 1;
    return acc;
  },

  {},
);

let maxCount= 0;
let maxElement= null;

for(let key in frequency){
  if(frequency[key] > maxCount){
    maxCount = frequency[key];
    maxElement = key
  }
}

console.log(maxCount)
console.log(maxElement)



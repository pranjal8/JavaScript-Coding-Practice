function flattenArray(nestedArray) {
  //Approach 3. Using Recursion
  let arr = [];
  for (let item of nestedArray) {
    if (Array.isArray(item)) {
      arr = arr.concat(flattenArray(item));
    } else if (typeof item === "number") {
      arr.push(item);
    }
  }
  return arr;
}

const nested = [1, [2, [3, [4]]]];
console.log(flattenArray(nested));

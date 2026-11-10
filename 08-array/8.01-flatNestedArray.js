// Approach 1. Use Infinity to completely flatten:
function flattenArray(nestedArray) {
  return nestedArray.flat(Infinity);
}

const nested = [1, [2, [3, [4]]]];
console.log(flattenArray(nested));

// Approach 2. Using reduce with Recursion
function flattenArray(nestedArray) {
  return nestedArray.reduce((acc, current) => {
    return Array.isArray(current) ? acc.concat(flattenArray(current)) : acc.concat(current);
  }, []);
}

console.log(flattenArray(nested));

// Approach 3. Using Recursion
function flattenArray(nestedArray) {
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

console.log(flattenArray(nested));

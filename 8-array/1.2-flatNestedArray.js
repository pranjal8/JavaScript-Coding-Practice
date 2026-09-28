function flattenArray(nestedArray) {
  //Approach 1. Use Infinity to completely flatten:
  return nestedArray.flat(Infinity);

}

const nested = [1, [2, [3, [4]]]];
console.log(flattenArray(nested));

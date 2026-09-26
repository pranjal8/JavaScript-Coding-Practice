function flattenArray(nestedArray) {
  
  //Approach 2. Using reduce with Recursion
   return nestedArray.reduce((acc, current) => {
    return Array.isArray(current)
      ? acc.concat(flattenArray(current))
      : acc.concat(current);
  }, []);


}

const nested = [1, [2, [3, [4]]]];
console.log(flattenArray(nested));

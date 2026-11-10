function removeFalsyValues(arr) {
  return arr.filter(Boolean);

/* 
// These are all equivalent:
arr.filter(Boolean);
arr.filter(item => Boolean(item));
arr.filter(item => item);
arr.filter(item => !!item);  // Double NOT operator
  
*/
}

const array = [0, 1, false, 2, "", 3, null, undefined, 4, NaN, 5];
const result = removeFalsyValues(array);
console.log(result); // [1, 2, 3, 4, 5]

/* 

Boolean is actually a constructor function that:

Can be called as Boolean(value) to convert any value to boolean

Returns true for truthy values, false for falsy values

*/

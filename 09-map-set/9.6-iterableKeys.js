/* 
    We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push
    map.keys() returns an iterable, but not an array.
    We can convert it into an array using Array.from:
*/

let map = new Map([["age", 25]]);

map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("more"); //"more" is not added to the Map. It is added to the separate keys array. Changing it does not change the original Map.

console.log(keys); // [ 'age', 'name', 'more' ]

let map = new Map(); //create map

//stores the value by key --> Every map.set call returns the map itself, so we can “chain” the calls:
map.set("1", "String").set(1, "number").set(true, "bool1");

//returns the value by the key, undefined if key doesn’t exist in map.
console.log(map.get(3));

console.log(map.has(1)); //returns true if the key exists, false otherwise.

console.log(map.delete("1")); // removes the element (the key/value pair) by the key.

console.log(map.size); //returns the current element count.

console.log(map);
map.clear(); // removes everything from the map.

console.log(map);

let john = { name: "John" };
map.set(john, 123);
console.log(map);

//iteration over map
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomato", 300],
  ["onion", 60],
]);

for(let keys of recipeMap.keys()){
    console.log(keys)
}

for(let value of recipeMap.values()){
    console.log(value)
}

for(let [key, value] of recipeMap.entries()){
    console.log(`${key} , ${value}`)
}
console.log(recipeMap)
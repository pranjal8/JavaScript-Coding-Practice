let set = new Set();  //Take the elements from this iterable and put them into the Set. Remove duplicates.

console.log(set);

//// adds a value, returns the set itself. 
set.add([1,2,3,4,5,2]);  //. -->The duplicate 2 inside the array is not removed, because the array itself is one value inside the Set.

let john ={name:"John"};
let pete ={name:"Pete"};
let mary ={name:"Mary"};

set.add(john);
set.add(pete);
set.add(mary);

console.log(set.size)

for(let item of set){
    console.log(item.name)
}



/* 
    add() adds one value. 
    new Set(iterable) takes values from the iterable and adds them individually.
*/
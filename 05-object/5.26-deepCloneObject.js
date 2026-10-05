function deepClone(obj){

    return JSON.parse((JSON.stringify(obj)))
}

deepClone({ a: 1, b: { c: 2 } }); // {a: 1, b: {c: 2}}
deepClone([1, 2, 3]); // [1, 2, 3]
deepClone({ a: 1, b: [2, 3] }); // {a: 1, b: [2, 3]}
deepClone({ a: 1, b: { c: 2, d: [3, 4] } }); // {a: 1, b: {c: 2, d: [3, 4]}}
deepClone({ a: 1, b: { c: 2, d: [3, 4] }, e: [5, 6] }); // {a: 1, b: {c: 2, d: [3, 4]}, e: [5, 6]}

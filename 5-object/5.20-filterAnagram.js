let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");

    obj[sorted] = arr[i];
    //Duplicate keys overwrite previous entries, so the last occurrence is retained.
  }
  
  return Object.values(obj);
}

const res = aclean(arr);
console.log(res);

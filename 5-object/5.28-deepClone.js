let original = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

let copy = structuredClone(original);

copy.address.city = "Mumbai";

console.log(original.address.city); // Delhi
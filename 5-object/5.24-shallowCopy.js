let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone  = Object.assign({}, user);

console.log(user.sizes , clone.sizes)
clone.sizes.height =60;
console.log(user.sizes , clone.sizes)

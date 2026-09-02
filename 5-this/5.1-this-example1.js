//"use strict"
const obj = {
  i: 10,
  b: () => {
    console.log(this, this.i);
  },
  c: function () {
    console.log(this, this.i);
  },
};

obj.b() // {} undefined
obj.c() //{ i: 10, b: [Function: b], c: [Function: c] } 10
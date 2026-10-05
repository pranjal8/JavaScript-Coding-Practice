// "use strict"

function makeUser() {
  return {
    name: "John",
    ref: this,

    // ref(){
    //     return this
    // }
  };
}

let user = makeUser();

console.log(user.ref.name); //undefined
console.log(user.ref().name); //John



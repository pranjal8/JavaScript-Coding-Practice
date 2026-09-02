// Q1
{
  let a = 10;
  {
    console.log(a);
    let a = 20;
  }
}

// Q2
let a = 10;

function test() {
  let a = 20;
  console.log(a);
}

test();
console.log(a);

// Q3
let a = 10;

{
  var a = 20;
}

// Q4
var a=10;
function test(){
    console.log(a); // undefined
    var a=20;
}
test() 
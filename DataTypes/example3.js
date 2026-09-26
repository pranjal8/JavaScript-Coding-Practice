let a = 10;

function outer() {
  console.log(a);

  let a = 20;

  function inner() {
    console.log(a);
  }

  inner();
}

outer();
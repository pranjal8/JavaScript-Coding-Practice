function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }
  counter.set = (value) => {
    count = value;
    return count;
  };

  counter.decrease = ()=>{
    count-- ;
    return count;
  }

  return counter;
}
console.log(makeCounter().set(10)) //10
console.log(makeCounter().decrease()) //-1
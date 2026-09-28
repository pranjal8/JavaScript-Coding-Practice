function Accumulator(startingValue){
    this.value = startingValue;
    this.read= function(){
        this.value +=  +prompt("New number");
    }
}

let accumulate = new Accumulator(1);
accumulate.read();
console.log(accumulate.value)

/* 
    Question:
    Create a constructor function Accumulator(startingValue) that:
    Stores the starting value in a property called value.
    Has a method read() that reads a new number using prompt() and adds it to value.
*/
const myObj={
    city:"Madrid",
    greet(){
        console.log(`Greetings from ${this.city}`)
    }
}
myObj.greet()
console.log( myObj.toString())
console.log(Object.getPrototypeOf(myObj))
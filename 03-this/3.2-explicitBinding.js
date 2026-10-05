function greet(l1,l2,l3){
    console.log(`Hello, my name is ${this.name} and I know ${l1}, ${l2} and ${l3}`)
}

const user={
    name:"Tyler",
    age:26,
}

const languages=['Java', "Typescript", "Javascript"]

greet.call(user, languages[0], languages[1],languages[2]);
const newFn = greet.bind(user, languages[0], languages[1],languages[2]);

greet.apply(user, languages)
newFn()
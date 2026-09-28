let user2 = new Object(); // object constructor syntax

//object literal syntax
let user = {
    name:"John",
    age:30
};
console.log(user.name);
console.log(user.age)

user.isAdmin = true; // add property

delete user.age; // remove property

//add - multiworld propert name
user['likes birds'] = true;

console.log(user)




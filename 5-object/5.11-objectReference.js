let message ="Hello";
let phrase =message;
console.log(message, phrase)

let user ={name:"John"}
let admin =user;
/* 
there’s still one object, but now with two variables that reference it.
*/
admin.name="Pete";
console.log(user.name)
function User(name){
    this.name  = name;
    this.isAdmin = true;
}
let user = new User("Jack")

console.log(user.name);
console.log(user.isAdmin);

/* 
    # Why this is used with new?
    # JavaScript automatically creates an object and makes: this refers to that object
    # this.name = name; means --> user.name = name;
    # this.isAdmin = true; means --> user.isAdmin = true;
*/


/* 

    // Without this   You could write: // Factory-function style

    function User(name) {
        let user = {
            name: name,
            isAdmin: true
        };

        return user;
    }

    let user = User("John"); //don't use new Instead, the function directly creates and returns an object.

    console.log(user.name);     // John
    console.log(user.isAdmin);  // true

*/


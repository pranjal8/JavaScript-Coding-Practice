


console.log("name:", name2);
console.log("handle:", handle);
console.log("Get User:", getUser);


var name2 = "John";
var handle = "@john";

function getUser() {
  return {
    name: name2,
    handle: handle,
  };
}

function getURL(handle) {
  var twitterURL = "https://twitter.com/";
  return twitterURL + handle;
}

console.log(getURL(handle));
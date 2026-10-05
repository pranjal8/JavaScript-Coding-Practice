let user={
    name:"John",
    age:30,
    isAdmin:true
};

for(let key in user){
    console.log(key, user[key])
}

let codes={
    "49":"Germany",
    "41":"Switzerland",
    "44":"Great Britain",
    "1":"USA"
}

for(let code in codes){
    console.log(code) //Codes go in the ascending sorted order, because they are integers. So we see 1, 41, 44, 49.
}
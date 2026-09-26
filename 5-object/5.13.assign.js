let user={name:"john"};
let permission1={canView:true};
let permission2={canEdit: true};

Object.assign(user, permission1, permission2);

console.log(user)
permission1.canView = false
console.log(permission1, permission2)
console.log(user)

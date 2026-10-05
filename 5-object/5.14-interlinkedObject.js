function marry(man, woman) {
  woman.husband = man; // add property to woman object and make its value the man object
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry({name:"john"}, {name:"Ann"})

console.log(family)
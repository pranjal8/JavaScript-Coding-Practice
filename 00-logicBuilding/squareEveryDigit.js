function square(num){
   
    return Number(String(num).split("").map(item => item*item).join(''));
}

const result = square(9119)
console.log(result)
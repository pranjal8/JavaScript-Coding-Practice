let prices = {
  banana: 2,
  orange: 1,
  meat: 4,
};

let doublePrices = Object.entries(prices).map(([key, value]) => {
  console.log([key, value]);
  return [key, value * 2];
});

console.log("Double Prices:", Object.fromEntries(doublePrices));

Object.entries(prices).map(item =>{
    console.log(`item:${item} , 
        index0 ${item[0]} , 
        index1 ${item[1]} `)
})
function discountPrices(prices, discount) {
  var discounted = [];

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount / 100);
    var finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);

    console.log(i, ":", discountedPrice, finalPrice);
  }

  console.log(i, "->", discountedPrice, finalPrice);
  return discounted;
}

const result = discountPrices([100, 200, 300], 20);
console.log(result);

/* 
we are able to log i, discountedPrice, and finalPrice outside of the for loop since they were declared with var and var is function scoped.
*/
const arr = ["a", "b", "a", "c", "b"];

const res = arr.reduce(
  (acc, current) => {
    acc[current] = (acc[current] || 0 ) + 1;
    return acc;
  },

  {},
);


//Approach 2 -->forEach

const frequency = {};

arr.forEach((item) => {
  frequency[item] = (frequency[item] || 0) + 1;
});

console.log(frequency);

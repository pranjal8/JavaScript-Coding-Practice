let nums = [1, 1, 2];

var removeDuplicates = function (array) {
  let i = 0;

  for (j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }

  return array.slice(0, i + 1);
};

const result = removeDuplicates(nums);
console.log(result);

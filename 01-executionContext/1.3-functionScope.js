function getDate() {
  var date = new Date();
  function formatDate() {
    return date.toDateString();
  }
  return formatDate();
}

const result = getDate();
console.log(result);
console.log(date) // ReferenceError: date is not defined

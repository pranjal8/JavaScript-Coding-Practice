function camelize(str) {
  const parts = str.split("-");
  let result = parts[0] || ""; // Handle empty strings

  for (let i = 1; i < parts.length; i++) {
    const word = parts[i];
    result += word[0].toUpperCase() + word.slice(1);
  }

  return result;
}

const res1 = camelize("background-color") == "backgroundColor";
const res2 = camelize("list-style-image") == "listStyleImage";
const res3 = camelize("-webkit-transition") == "WebkitTransition";

console.log(res1, res2, res3)
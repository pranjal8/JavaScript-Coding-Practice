const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error:  ${response.status}`);
    }
    console.log(`Received response: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    data.map((item) => console.log(item.name));
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

console.log("Started request...");

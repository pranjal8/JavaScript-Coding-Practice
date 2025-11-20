
// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Search handler
function handleSearch(query) {
  console.log('Searching for:', query);

  // Simulate an API call
  fetch(`https://api.example.com/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => console.log('Results:', data));
    
}

// Debounced search
const debouncedSearch = debounce(handleSearch, 500);

// Attach to input
const input = document.querySelector('#search-input');
input.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
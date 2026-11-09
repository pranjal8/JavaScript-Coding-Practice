/* 
Extract only numbers from a string  Input: “a1b2c3”  Output: “123"
*/

const extractNumbers = (str = '') => 
  typeof str === 'string' ? str.replace(/\D/g, '') : '';

// Test all cases
console.log(extractNumbers("abc123xyz"));         // "123"
console.log(extractNumbers("Price: $99.99"));     // "9999"
console.log(extractNumbers("Version 2.0"));       // "20"
console.log(extractNumbers("No digits!"));        // ""
console.log(extractNumbers(""));                  // ""
console.log(extractNumbers(null));                // ""
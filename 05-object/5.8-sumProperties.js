/* 
    Question:
    Write the function sumSalaries(salaries) that returns the sum of all salaries.
    If salaries is empty, then the result must be 0.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumSalaries(salaries));

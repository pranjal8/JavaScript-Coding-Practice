function Counter() {
  let count = 15;

  function up() {
    return count++;
  }

  function down() {
    return --count;
  }

  {
    this.up = up;
    this.down = down();
  }
}

let count = new Counter();
console.log(count, count.up(), count.down);

/**
 * 
 * Other way to write above code
 * 
 * 
 * function Counter() {
 * let count = 15;
 *  this.up = function() {
 *     return count++;
 * };
 * this.down = function down() {
 *     return --count;
 * };
 * }
 * let count = new Counter();
 * 
 */

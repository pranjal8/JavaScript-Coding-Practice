/* 
    Problem Statement
    Predict the output of the following JavaScript program and explain why the setTimeout() callbacks print their values after the loop completes.
    Given a loop that schedules multiple setTimeout() callbacks, determine the order and values printed by the synchronous console.log() and asynchronous setTimeout() callbacks.
*/

let i = 0;

let sample = () => {
  for (i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log("Timeout Value : " + i);
    }, 0);

    console.log("Display Value : " + i); 
  }
};

sample();


/* 
    Expected Output:

    Display Value : 0
    Display Value : 1
    Display Value : 2
    Display Value : 3
    Display Value : 4

    Timeout Value : 5
    Timeout Value : 5
    Timeout Value : 5
    Timeout Value : 5
    Timeout Value : 5
*/
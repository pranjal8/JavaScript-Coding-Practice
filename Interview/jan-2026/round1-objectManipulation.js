/* 
    Question: 
    You have a list of students, each with scores in Telugu, Hindi, and English 
    from three midterm exams. 
    Calculate the total marks for each midterm, 
    then find the sum of the two highest totals per student. 
    Rank the students in descending order based on this sum.


    The task can be broken into 3 steps:
    Calculate total marks for each mid
    Pick the best 2 mid totals
    Rank students based on the sum of those 2 best mids
*/

const students = [
  {
    name: "A",
    rollNo: 1,
    mids: [
      { mid: 1, telugu: 40, hindi: 40, english: 40 },
      { mid: 2, telugu: 35, hindi: 60, english: 70 },
      { mid: 3, telugu: 45, hindi: 50, english: 60 }
    ]
  },
  {
    name: "B",
    rollNo: 2,
    mids: [
      { mid: 1, telugu: 50, hindi: 35, english: 60 },
      { mid: 2, telugu: 60, hindi: 40, english: 55 },
      { mid: 3, telugu: 55, hindi: 65, english: 70 }
    ]
  },
  {
    name: "C",
    rollNo: 3,
    mids: [
      { mid: 1, telugu: 30, hindi: 45, english: 50 },
      { mid: 2, telugu: 40, hindi: 50, english: 45 },
      { mid: 3, telugu: 42, hindi: 48, english: 60 }
    ]
  },
  {
    name: "D",
    rollNo: 4,
    mids: [
      { mid: 1, telugu: 45, hindi: 40, english: 35 },
      { mid: 2, telugu: 55, hindi: 70, english: 75 },
      { mid: 3, telugu: 48, hindi: 62, english: 60 }
    ]
  },
  {
    name: "E",
    rollNo: 5,
    mids: [
      { mid: 1, telugu: 35, hindi: 55, english: 60 },
      { mid: 2, telugu: 50, hindi: 48, english: 64 },
      { mid: 3, telugu: 42, hindi: 65, english: 58 }
    ]
  }
];

const rankedStudents = students.map(student => {

  // Step 1: Calculate total for each mid
  const totals = student.mids.map(mid => {
    return mid.telugu + mid.hindi + mid.english;
  });

  // Step 2: Sort totals descending
  totals.sort((a, b) => b - a);

  // Step 3: Sum top 2 totals
  const bestTwoTotal = totals[0] + totals[1];

  return {
    name: student.name,
    rollNo: student.rollNo,
    bestTwoTotal
  };
});

// Step 4: Rank students
rankedStudents.sort((a, b) => b.bestTwoTotal - a.bestTwoTotal);

console.log(rankedStudents);

/* 
Output:
[
  { name: 'D', rollNo: 4, bestTwoTotal: 370 },
  { name: 'B', rollNo: 2, bestTwoTotal: 345 },
  { name: 'E', rollNo: 5, bestTwoTotal: 340 },
  { name: 'A', rollNo: 1, bestTwoTotal: 325 },
  { name: 'C', rollNo: 3, bestTwoTotal: 285 }
]
*/
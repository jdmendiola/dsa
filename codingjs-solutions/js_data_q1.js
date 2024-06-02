/*

Instructions:

	1.	Write a function named getTopStudents that takes an array of student objects as its parameter.
	2.	Filter the students who have a score greater than 75.
	3.	Return an array of names of these top-scoring students.

*/

let students = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 70 },
  { name: "Charlie", score: 85 },
  { name: "David", score: 60 },
  { name: "Eve", score: 95 }
];

function getTopStudents(arr){
  let tempArray = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i].score > 75){
      tempArray.push(arr[i].name);
    }
  }
  return tempArray;
}

console.log(getTopStudents(students));
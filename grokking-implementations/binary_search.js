/* 

Write a function in JavaScript that performs a binary search on a sorted array of integers. The function should take two arguments: the sorted array and the target value to search for. The function should return the index of the target value if it is found in the array, or -1 if it is not found.

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetValue = 7;
const result = binarySearch(sortedArray, targetValue);
console.log(result); // Output: 3


*/

function binarySearch(sortedArray, targetValue){
  let low = 0;
  let high = sortedArray.length - 1;

  while (low <= high){
    // find the midIndex each iteration
    let midIndex = Math.floor((low + high) / 2);
    let midGuess = sortedArray[midIndex];
    //check if mid is the targetValue
    if (midGuess === targetValue) {
      return midIndex;
    }
    if (midGuess > targetValue){
      high = midIndex - 1;
    } else {
      low = midIndex + 1;
    }
  }

  return null;
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetValue = 7;
const result = binarySearch(sortedArray, targetValue);
console.log(result); // Output: 3
/*

Array-2 -- zeroMax
Return a version of the given array where each zero value in the array is replaced by the largest odd value to the right of the zero in the array. If there is no odd value to the right of the zero, leave the zero as a zero.

Optmized answer after solving:

function zeroMax(arr) {
    // Helper function to determine if a number is odd
    function isOddNumber(num) {
        return num % 2 !== 0;
    }

    // Traverse the array from right to left
    let maxOdd = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (isOddNumber(arr[i])) {
            // Update maxOdd if the current number is odd and greater than the current maxOdd
            maxOdd = Math.max(maxOdd, arr[i]);
        }
        if (arr[i] === 0) {
            // Replace zero with the largest odd number found to the right
            arr[i] = maxOdd;
        }
    }
    return arr;
}

// Examples
console.log(zeroMax([0, 5, 0, 3])); // → [5, 5, 3, 3]
console.log(zeroMax([0, 4, 0, 3])); // → [3, 4, 3, 3]
console.log(zeroMax([0, 1, 0]));    // → [1, 1, 0]

*/

function findSubZeroIndexes(arr){
  
  let subZeros = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0){
      subZeros.push(i);
    }
  }  

  return subZeros;

}

function isOddNumber(num){
  return num % 2 != 0;
}

function getNumberBesideZero(arrayIndex, arr){
  if (arrayIndex < arr.length){
    return arr[arrayIndex + 1];
  }
}

function getMaxOdd(arr){

  let nums = [];
  let largestValue = nums[0] != undefined ? nums[0] : 0;
  let largestIndex = 0;

  let zeroIndexes = findSubZeroIndexes(arr);

  // get list of odd numbers beside 0's
  for (let i = 0; i < zeroIndexes.length; i++){
    let numCheck = getNumberBesideZero(zeroIndexes[i], arr);
    if (isOddNumber(numCheck)){
      nums.push(numCheck);
    }
  }

  // get the biggest odd number
  for (let i = 0; i < nums.length; i++){
    if (nums[i] > largestValue){
      largestValue = nums[i];
      largestIndex = i;
    }
  }
  
  return nums[largestIndex];

}

function zeroMax(arr) {

  let zeroIndexes = findSubZeroIndexes(arr);
  let tempMax = 0;

  for (let i = 0; i < zeroIndexes.length; i++){
    
    // get number beside zero
    let numCheck = getNumberBesideZero(zeroIndexes[i], arr);
    

    // check if odd number
    if (isOddNumber(numCheck)){

      if (numCheck == undefined){
        numCheck = 0;
      }

      arr[zeroIndexes[i]] = numCheck;
    } else {
      let largestOdd = getMaxOdd(arr);
      arr[zeroIndexes[i]] = largestOdd;
    }
    
  }

  return arr;

}

console.log(zeroMax([0,1,0]));
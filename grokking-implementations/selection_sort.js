function findSmallestIndex(arr){
  // find the smallest value and return its array index
  let smallestValue = arr[0];
  let smallestIndex = 0;

  // loop through the array with starting at the first index to compare as it iterates replacing the smallest value if the current iteration is smaller than the stored smallest value
  for (let i = 0; i < arr.length; i++){
    if (arr[i] <= smallestValue){
      smallestValue = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr){
  // create a copy of the original array cause we are going to mutate the shit out of this
  let workingArray = [...arr];
  // new array which will be populated with sorted values
  let sortedArray = [];

  // loop through the length of the original array
  for (let i = 0; i < arr.length; i++){
    // find the smallestIndex in workingArray using our helper we created
    let smallestIndex = findSmallestIndex(workingArray);
    // find smallest number in workingArray using smallestIndex
    let smallestNumberInArray = workingArray[smallestIndex];
    // push the smallest number in the sortedArray
    sortedArray.push(smallestNumberInArray);
    // remove the smallest number in workingArray
    workingArray.splice(smallestIndex, 1);
  }

  return sortedArray;

}

let arr1 = [64, 25, 12, 22, 11];
let sortedArr1 = selectionSort(arr1);
console.log(sortedArr1); // Output should be: [11, 12, 22, 25, 64]

let arr2 = [5, 3, 8, 4, 2];
let sortedArr2 = selectionSort(arr2);
console.log(sortedArr2); // Output should be: [2, 3, 4, 5, 8]

let arr3 = [10, 2, 8, 6, 7, 5];

let sortedArr3 = selectionSort(arr3);
console.log(sortedArr3); // Output should be: [2, 5, 6, 7, 8, 10]
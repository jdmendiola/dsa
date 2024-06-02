function binarySearch(arr, targetValue, start = 0, end = arr.length - 1){ 
  
  // returns -1 if targetValue is not found
  if (start > end){
    return -1
  }

  // determine middle index
  let middle = Math.floor((start + end) / 2);

  // check if middle is the target value 
  if (arr[middle] === targetValue){
    return middle; //return the index for the middle targetValue
  }

  /*

  let's search right side of array if number is higher than middle and if not search the left side 
  call recursive function

  */

  if (arr[middle] > targetValue){
    // sort the left side
    return binarySearch(arr, targetValue, start, middle - 1)
  } else {

    // sort the right side 
    return binarySearch(arr, targetValue, middle + 1, end)
  }

}

let nums = [2,3,4,5,6,67,90,880];
console.log(binarySearch(nums, 880));



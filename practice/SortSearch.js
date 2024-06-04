function quickSort(arr){
  // [33,91,1,88,99,102,2,5,3];

  if (arr.length <= 1){
    return arr;
  }

  //set pivot
  let pivot = arr[0];

  // set left and right arrays
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++){
    if (arr[i] < pivot){
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;
  
  while (right > left) {
    const indexToCheck = Math.floor((left + right) / 2);
    const checking = arr[indexToCheck];
    if (checking === target) {
      return indexToCheck;
    } else if (checking < target) {
      left = indexToCheck + 1;
    } else {
      right = indexToCheck;
    }
  }
  
  return null;
}


let unSorted = [33,91,1,88,99,102,2,5,3];
console.log(unSorted);
let sorted = quickSort(unSorted);
console.log(sorted);
let targetSearch = binarySearch(sorted, 33);

console.log(targetSearch);
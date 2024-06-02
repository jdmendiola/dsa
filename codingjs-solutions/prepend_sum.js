function prependSum(arr){
  // remove first two items of array but add them and add them to the first spot
  let firstItem = arr[0];
  let secondItem = arr[1];
  let newItem = arr[0] + arr[1];

  arr.shift();
  arr.shift();

  arr.unshift(newItem);
  return arr;

}

console.log(prependSum([23, 200, 5, 4, 3, 5,7,8,23]));
function count(arr){
  // [1,3,5]
  // figure out a simple case as the base case
  if (arr.length === 0){
    return 0;
  }

  // figure out how to reduce the problem and get to the base case
  arr.pop();
  return 1 + count(arr);
}

let arr = [1,3,5];
console.log(count(arr));
function max(arr){

  // [1,3,5]
  // figure out simple base case: in this case an array it is usually down to 1 value
  if (arr.length === 1){
    return arr[0];
  }

  // figure out recursive case and how to reduce the problem to get to the base case

  // shrink array by 1 [3,5] instead of [1,3,5]
  let sub = max(arr.slice(1));

  // going to interrupt and not return anything till the base case but when we do start returning here

  return arr[0] > sub ? arr[0] : sub;

}

let nums = [1,673,5];
console.log(max(nums));
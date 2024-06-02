function sum(arr){
  // base case [1,3,5]
  if (arr.length === 1){
    return arr[0];
  }
  // recursive case [1,3,5]
  let firstValue = arr.shift();
  return firstValue + sum(arr);
}

let arr = [1,3,5];
console.log(sum(arr));
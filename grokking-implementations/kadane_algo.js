let nums = [-2, 3, -3, 4, -1, 2, 8, -5, 4];

function maxSubArray(arr){

  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++){
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubArray(nums));
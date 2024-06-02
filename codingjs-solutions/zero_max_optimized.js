function zeroMax(arr){

  function isOddNumber (num){
    return num % 2 != 0;
  }

  let maxOdd = 0;

  for (let i = arr.length - 1; i >= 0 ; i--){

    if (isOddNumber(arr[i])){
      maxOdd = arr[i];
    }

    if (arr[i] === 0){
      arr[i] = maxOdd;
    }

  }

  return arr;
}

let arr = [0,4,0,3];

console.log(zeroMax(arr));
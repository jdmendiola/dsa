function fix34(arr){

  // fix34([1,3,1,4]);
  let nextFourIndex = -1;
  let lastThreeIndex = -1;
  let nonIndex;

  for (let i = 0; i < arr.length; i++){
    let num = arr[i];

    if (num === 3){
      lastThreeIndex = i;

      // check if next number is 4
      if (arr[i + 1] !== 4){
        nonIndex = i + 1;
        nextFourIndex = findNextDigit(arr, i + 1, 4);
        let temp = arr[nonIndex];
        arr[nonIndex] = arr[nextFourIndex];
        arr[nextFourIndex] = temp;
      }      
    }

    if (num === 4 && lastThreeIndex !== i - 1){
      nextFourIndex = i;
      // check if next number is 3
      let nextThree = findNextDigit(arr, i, 3);

      let temp = arr[i];
      arr[i] = arr[nextThree + 1];
      arr[nextThree + 1] = temp;
    }

  }

  return arr;

}

function findNextDigit(arr, start, digit){
  for (let i = start; start < arr.length; i++){
    let num = arr[i];

    if (num === digit){
      return i;
    }
  }
}

console.log(fix34([3, 1, 4, 1, 3, 4]));
function canBalance(array){
  // if less then 1 return false can't compare sums need at least 2 values
  if (array.length < 1){
    return false;
  }

  //create accumulator for left
  let sumLeft = 0;
  //create accumulator for right
  let sum = 0;
  let arr = [...array];

  //sum up left of everything of the current index value
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //get left side sum
    sumLeft = sumLeft + element;
    //get right side sum
    arr.shift();
    sum = arr.reduce((element, acc) => {
      return acc + element;
    }, 0);
    
    // check if current left value accumulated is equal to the rest of the array sum
    if (sumLeft === sum){
      return true;
    }
  }

  return false;
}

console.log(canBalance([1,1,1,2,1]));
console.log(canBalance([2, 1, 1, 2, 1]));
console.log(canBalance([10,10]));

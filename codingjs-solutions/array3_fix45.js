/*

fix45([5, 4, 9, 4, 9, 5]) → 9,4,5,4,5,9
fix45([1, 4, 1, 5]) → 1,4,5,1
fix45([1, 4, 1, 5, 5, 4, 1]) → 1,4,5,1,1,4,5

(This is a slightly harder version of the fix34 problem.) Return an array that contains exactly the same numbers as the given array, but rearranged so that every 4 is immediately followed by a 5. Do not move the 4's, but every other number may move. The array contains the same number of 4's and 5's, and every 4 has a number after it that is not a 4. In this version, 5's may appear anywhere in the original array.

*/

function fix45(arr){

  function findNumber(array, value, indexValue){
    let numIndex;
    for (let index = indexValue; index < array.length; index++) {
      const element = array[index];
      if (element === value){
        numIndex = index;
        break;
      }
    }
    return numIndex;
  }

  let fiveIndex;
  let fourIndex;
  let nextFive;
  let temp;
  let lastFour = 0;

  for (let index = 0; index < arr.length; index++) {
    
    const element = arr[index];
    
    //find a 5
    if (element === 5){
      // check if previous number is a 4
      if (arr[index - 1] != 4){
        // let's move this 5 in front of a 4
        // find a 4 record its index and the index of the non five number also record the last 4th index so the loop will skip this search
        fiveIndex = index;
        // loop through array again but start at the last 4 it found, I start this as 0 index
        fourIndex = findNumber(arr, 4, lastFour + 1);
        nextFive = fourIndex + 1;
        lastFour = fourIndex;
        //swap fiveIndex with nextFive
        temp = arr[fiveIndex];
        arr[fiveIndex] = arr[nextFive];
        arr[nextFive] = temp; 
      }
    }
  }

  console.log('next five', nextFive, 'next four', fourIndex, 'current 5', fiveIndex);
  return arr;
}


console.log(fix45([5, 4, 9, 4, 9, 5]));
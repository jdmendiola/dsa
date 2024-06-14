//[0,3,4,0,9]
// push all zeros to the end of the array

function pushZero(arr){

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    let temp;
  
    // find zero
    if (element === 0 && index !== arr.length){
      temp = arr.splice(index, 1);
      arr.push(temp[0]);
    }
    
  }

  return arr;

}

let arr = [0,3,4,0,9];

console.log(pushZero(arr));
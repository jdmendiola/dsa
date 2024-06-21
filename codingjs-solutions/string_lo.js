/*

  ['o','l','l','o','o','o','o','l','l','o'];

  count the amount of o's in between L's if there is space between L's assume there is an o between them

*/

function countO(arr){

  let nextL = 0;
  let zeros = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element === 'l'){

      firstL = index;

      //check if current position is 2nd last guaranteed no O's
      if (index !== arr.length - 2){
        //find nextL
        nextL = findL(index + 1);
      }

      // accumulate O's
      if ((nextL - firstL) > 2){
        zeros += nextL - firstL - 1;
      }
    
    }

  }
  
  function findL(startIndex){
    for (let index = startIndex; index <= arr.length - 1; index++) {
      const element = arr[index];
      if (element === 'l' || element === 'L'){
        return index;
      }
    }
  }

  return zeros;

}

console.log(countO(['o','l','l','o','o','o','o','l','l','o']));
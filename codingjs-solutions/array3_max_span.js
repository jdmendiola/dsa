function maxSpan(arr){
  
  //maxSpan([1, 2, 1, 1, 3]) → 4

  let maxSpan = 0;
  let indicesMap = new Map();
  let span;

  for (let i = 0; i < arr.length; i++){
    let num = arr[i];

    if (!indicesMap.has(num)){
      indicesMap.set(num, [i, i]);
    } else {
      let indicesArray = indicesMap.get(num);    
      indicesArray[1] = i;
      indicesMap.set(num, indicesArray);
    }

    span = indicesMap.get(num)[1] - indicesMap.get(num)[0] + 1;

    maxSpan = Math.max(maxSpan, span);

  }

  return maxSpan;

}

console.log(maxSpan([1, 4, 2, 1, 4, 4, 4]));
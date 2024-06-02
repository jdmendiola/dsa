function evenlySpaced(a,b,c){
  let arr = [a, b, c];

  let small = arr[0];
  let medium;
  let large = arr[0];
  let smallMedDiff = 0;
  let medLargeDiff = 0;
  

  for (let i = 0; i < arr.length; i++){
    small = Math.min(arr[i], small);
    large = Math.max(arr[i], large);
  }

  let smallIndex = arr.indexOf(small);
  arr.splice(smallIndex, 1);
  let largeIndex = arr.indexOf(large);
  arr.splice(largeIndex, 1);
  medium = arr[0];

  smallMedDiff = medium - small;
  medLargeDiff = large - medium;

  return smallMedDiff === medLargeDiff ? true : false;
  
}

console.log(evenlySpaced(2,4,6));
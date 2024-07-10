/*

String-1 -- withoutX
Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

Examples

withoutX('xHix') → Hi
withoutX('xHi') → Hi
withoutX('Hxix') → Hxi

*/

function withoutX(array){
  // check x positions

  let arr = array.split('');

  let start = arr[0];
  let end = arr[arr.length - 1];
  
  if (start == 'x') {arr.splice(0, 1);}
  if (end == 'x') {arr.splice(arr.length - 1, 1)};

  return arr.join('');
}

console.log(withoutX('xHxxxxi'));
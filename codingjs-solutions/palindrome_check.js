function checkPalindrome(str){
  let check = "";
  
  for (let i = str.length - 1; i >= 0; i--){
    check += str[i];
  }

  console.log(check);

  return str === check;

}

let str = "2002";

console.log(checkPalindrome(str));


/* 

Given the daily values of a stock, create a function called max_profit_days() that, given a list of integers, will return the index value of the two elements that represent the day on which one should have bought a share and the day on which one should have sold a share based on the max profit.

A list of integers will represent the stock price at the beginning or “opening bell” of each day for a week. You are required to buy and sell only once. You also must buy a stock before selling it.

For example, given the list [17, 11, 60, 25, 150, 75, 31, 120], you can assume that index 0 represents day 0 and index 7 represents day 7. In this case, purchasing on day 1 and selling on day 4 would yield the most profit. If we were to call max_profit_days([17, 11, 60, 25, 150, 75, 31, 120]), the function would return (1, 4).

*/

function maxProfit(arr, smallestIndex = 0, largestIndexAhead = 0){

  let small = arr[0];
  let large = 0;
  let calcMax = 0;

  for (let index = 0; index < arr.length; index++) {
    
    const element = arr[index];

    // get largest 
    if (element > large){
      large = element;
      largestIndexAhead = index;
    }

    // get smallest
    if (element < small){
      small = element;
      smallestIndex = index;
    }

    // solve the easiest case max number is the last index
    if (largestIndexAhead === arr.length - 1){
      return [smallestIndex, largestIndexAhead];
    }

    // find another set of large and small as long as the smaller number is < larger number
    if (smallestIndex < largestIndexAhead){
      calcMax =  Math.max(calcMax, (arr[largestIndexAhead] - arr[smallestIndex]));
    }
  }

  return `The max profit ${calcMax}, ${[smallestIndex, largestIndexAhead]}`;
}

//console.log(maxProfit([17, 11, 60, 25, 8, 75, 31, 120]));
console.log(maxProfit([17, 11, 60, 290, 1, 5, 750, 12]));
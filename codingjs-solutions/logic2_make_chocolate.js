function makeChocolate(small, big, goal) {
  // Calculate the maximum number of big bars we can use
  let maxBigBars = Math.min(Math.floor(goal / 5), big);

  // Calculate the remaining weight after using big bars
  let remainingWeight = goal - (maxBigBars * 5);

  // Check if the remaining weight can be filled with small bars
  if (remainingWeight <= small) {
    return remainingWeight;
  } else {
    return -1;
  }
}

console.log(makeChocolate(4, 1, 9)); // 4
console.log(makeChocolate(4, 1, 10)); // -1
console.log(makeChocolate(4, 1, 7)); // 2
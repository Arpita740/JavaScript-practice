function findSmallestInteger(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
    return Math.min(...arr);
  }
  
  const numbers = [5, 2, 9, 1, 7];
  const smallest = findSmallestInteger(numbers);
  
  console.log(`The smallest integer in the array is: ${smallest}`);
  
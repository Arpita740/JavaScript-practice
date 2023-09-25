function calculateAverage(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum / arr.length;
  }
  
  const numbers = [5, 2, 9, 1, 7];
  const average = calculateAverage(numbers);
  
  console.log(`The average of the numbers in the array is: ${average}`);
  
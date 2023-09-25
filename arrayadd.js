function arraySum(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  
  const numbers = [5, 2, 9, 1, 7];
  const totalSum = arraySum(numbers);
  
  console.log(`The sum of all elements in the array is: ${totalSum}`);
  
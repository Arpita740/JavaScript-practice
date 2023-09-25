function sumOfPositiveNumbers(num) {
    let sum = 0;
  
    for (let i = 1; i <= num; i++) {
      if (i > 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  
  const num = 10; 
  const positiveSum = sumOfPositiveNumbers(num);
  
  console.log(`The sum of positive numbers from 1 to ${num} is: ${positiveSum}`);
  
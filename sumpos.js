function sumOfPositiveNumbers(num) {
    if (num < 1) {
      return "Number must be greater than or equal to 1.";
    }
  
    let sum = 0;
  
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  const num = 10; 
  const positiveSum = sumOfPositiveNumbers(num);
  
  console.log(` sum of positive numbers from 1 to ${num} is: ${positiveSum}`);
  
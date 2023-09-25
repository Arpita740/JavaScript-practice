function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  const numberToCheck = 15;
  const result = checkEvenOrOdd(numberToCheck);
  console.log(`${numberToCheck} is ${result}`);
  
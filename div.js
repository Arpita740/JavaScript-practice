function isDivisible(number, x, y) {
    return number % x === 0 && number % y === 0;
  }
  
  const numberToCheck = 12;
  const x = 3;
  const y = 4;
  
  if (isDivisible(numberToCheck, x, y)) {
    console.log(`${numberToCheck} is divisible by both ${x} and ${y}`);
  } else {
    console.log(`${numberToCheck} is not divisible by both ${x} and ${y}`);
  }
  
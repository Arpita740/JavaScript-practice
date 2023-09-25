function repeatString(str, times) {
    return str.repeat(times);
  }
  
  const originalString = "Hello, ";
  const repeatedString = repeatString(originalString, 3);
  
  console.log(`Original String: "${originalString}"`);
  console.log(`Repeated String: "${repeatedString}"`);
  
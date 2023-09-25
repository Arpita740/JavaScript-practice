function stringToArray(inputString, delimiter) {
    return inputString.split(delimiter);
  }
  
  const inputString = "Hello, World!";
  const delimiter = ", "; 
  
  const resultArray = stringToArray(inputString, delimiter);
  
  console.log(`Original String: "${inputString}"`);
  console.log(`Result Array: ${JSON.stringify(resultArray)}`);
  
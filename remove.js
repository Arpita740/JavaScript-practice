function removeFirstAndLastCharacters(inputString) {
    if (inputString.length < 3) {
      return "String too short.";
    }
  
    return inputString.slice(1, -1);
  }
  
  const originalString = "Hello World";
  const modifiedString = removeFirstAndLastCharacters(originalString);
  
  console.log(`Original String: "${originalString}"`);
  console.log(`Modified String: "${modifiedString}"`);
  
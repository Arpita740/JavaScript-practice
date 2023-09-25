function removeSpaces(inputString) {
    return inputString.replace(/\s/g, "");
  }
  
  const originalString = "Hello hi i'm from this World";
  const stringWithoutSpaces = removeSpaces(originalString);
  
  console.log(`Original String: "${originalString}"`);
  console.log(`String without Spaces: "${stringWithoutSpaces}"`);
  
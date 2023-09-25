function countLowercaseVowels(inputString) {
    let vowelCount = 0;
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i].toLowerCase(); 
  
      switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          vowelCount++;
          break;
      }
    }
  
    return vowelCount;
  }
  
  const inputString = "Hello hi Earth!";
  const result = countLowercaseVowels(inputString);
  console.log(`Number of  vowels in "${inputString}": ${result}`);
  
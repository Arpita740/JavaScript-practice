function performMathOperation(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Division by zero is not allowed.";
        }
        break;
      default:
        result = "Invalid operator. Please use +, -, *, or /.";
        break;
    }
  
    return result;
  }
  
 
  const num1 = 10;
  const num2 = 5;
  const additionResult = performMathOperation(num1, num2, "+");
  const subtractionResult = performMathOperation(num1, num2, "-");
  const multiplicationResult = performMathOperation(num1, num2, "*");
  const divisionResult = performMathOperation(num1, num2, "/");
  
  console.log(`Addition: ${num1} + ${num2} = ${additionResult}`);
  console.log(`Subtraction: ${num1} - ${num2} = ${subtractionResult}`);
  console.log(`Multiplication: ${num1} * ${num2} = ${multiplicationResult}`);
  console.log(`Division: ${num1} / ${num2} = ${divisionResult}`);
  
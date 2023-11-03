// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(operation, num1, num2) {
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        if (num2 === 0) {
          return 'Division by zero is not allowed';
        }
        return num1 / num2;
      default:
        return 'Invalid operation';
    }
  }
  
  // Example usage:
  console.log(calculate('add', 5, 3)); 
  console.log(calculate('subtract', 5, 3)); 
  console.log(calculate('multiply', 5, 3)); 
  console.log(calculate('divide', 10, 2)); 
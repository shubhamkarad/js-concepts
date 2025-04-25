function evaluatePostfix(expression) {
    const stack = [];
  
    for (const char of expression) {
      if (!isNaN(char)) {
        stack.push(Number(char)); // Push numbers
      } else {
        const b = stack.pop();
        const a = stack.pop();
        switch (char) {
          case '+': stack.push(a + b); break;
          case '-': stack.push(a - b); break;
          case '*': stack.push(a * b); break;
          case '/': stack.push(a / b); break;
        }
      }
    }
    return stack.pop();
  }
  
  console.log(evaluatePostfix("231*+9-")); // -4
  
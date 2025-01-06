// IS valid parentheses

function isValidParentheses(s) {
    const stack = [];
    const matchingBrackets = { ')': '(', '}': '{', ']': '[' };
  
    for (const char of s) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (stack.length && stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
    return stack.length === 0;
  }
  
  console.log(isValidParentheses("({[]})")); // true
  console.log(isValidParentheses("([)]"));  // false
  
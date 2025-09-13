function calculate(a, b, operator) {
    if (operator === '+') {
        return a + b;
    }
    else if (operator === '-') {
        return a - b;
    }
    else if (operator === '*') {
        return a * b;
    }
    else if (operator === '/') {
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    }
    else {
        return "Invalid operator";
    }
}

console.log("Addition: " + calculate(20, 5, '+'));
console.log("Subtraction: " + calculate(20, 5, '-'));
console.log("Multiplication: " + calculate(20, 5, '*'));
console.log("Division: " + calculate(20, 5, '/'));
console.log("Invalid operator test: " + calculate(20, 5, '^'));
function calculate(num1, num2) {
    // Define the operation function
    function operation(num1, num2, callback) {
        return callback(num1, num2);
    }

    // Addition callback
    function add(a, b) {
        return a + b;
    }

    // Multiplication callback
    function multiply(a, b) {
        return a * b;
    }

    // Perform the operations and log the results
    console.log("Addition: " + operation(num1, num2, add));
    console.log("Multiplication: " + operation(num1, num2, multiply));
}

// Example usage
calculate(5, 3);

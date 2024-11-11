function calculator(num1: number, num2: number, operator: string): number {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                throw new Error("Division by zero is not allowed");
            }
        default:
            throw new Error("Invalid operator");
    }
}

const value1 = 10;
const value2 = 5;
const operation = '+';

try {
    const result = calculator(value1, value2, operation);
    console.log(`Result: ${result}`);
} catch (error) {
    console.error(error.message);
}

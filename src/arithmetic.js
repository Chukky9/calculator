const Operation = {
    result: '',
    sum: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    multiply: (a, b) => {
        return a * b;
    },
    divide: (a, b) => {
        if (b == 0) {
            return "That won't work...";
        }
        return a / b; 
    },
    operate: (operator, num1, num2) => {
        if (operator == '+') {
            Operation.result = Operation.sum(num1, num2);
        } else if (operator == '-') {
            Operation.result = Operation.subtract(num1, num2);
        } else if (operator == '*') {
            Operation.result = Operation.multiply(num1, num2);
        } else {
            Operation.result = Operation.divide(num1, num2);
        }
        return +Number(Operation.result).toFixed(4);
    }
}

export default Operation;
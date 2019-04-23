/*const multiply = function (num1) {
    return function (num2) {
        return num1 * num2
    }
}*/

const multiply = (num1) => (num2) => num1 * num2

const multiplyBytwo = multiply(2);
const multiplyByFive = multiply(5);
const fibonacci = function(number) {
    if (typeof number !== 'number') {
        number = parseInt(number)
    }
    if (number < 0) return "OOPS";
    if (number == 0) return 0;

    let firstNum = 1;
    let secondNum = 0;

    for (let i = 2; i <= number; i++) {
        let current = firstNum + secondNum;
        secondNum = firstNum;
        firstNum = current;
    }

    return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;

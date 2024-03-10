const add = function(num1,num2) {
	return num1 + num2
};

const subtract = function(num1,num2) {
  return num1 - num2
};

const sum = function(array) {
	let arrayLen = array.length
  let sum=0;
  for (let i = 0;i<arrayLen;i++){
    sum += array[i]
  }
  return sum
};

const multiply = function(array) {
  let arrayLen = array.length
  let multiple=1;
  for (let i = 0;i<arrayLen;i++){
    multiple *= array[i]
  }
  return multiple
};

const power = function(num,power) {
	return num ** power
};

const factorial = function(number) {
	if (number === 0){
    return 1
  }
  else{
    let factorial = 1
    for (let i = 1;i<=number;i++){
      factorial *= i
    }
    return factorial
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

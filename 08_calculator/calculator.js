const add = function(a, b) {
	 return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numbers) {
  let out = 0
	for(let i of numbers){
    out += i
  }
  return out
};

const multiply = function(numbers) {
  let out = 1
  for(let i of numbers) out *= i
  return out
};

const power = function(a, b) {
	 return Math.pow(a,b)
};

const factorial = function(input) {
  let out = 1
	for(let i = input; i > 0; i--)out *= i
  return out
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

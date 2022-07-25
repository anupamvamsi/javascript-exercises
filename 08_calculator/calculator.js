const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, currentVal) => total + currentVal, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, currentVal) => product * currentVal, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let fact = 1;
  if (a == 0) {
    return fact;
  } else {
    for (let i = a; i > 0; i--) {
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

const fibonacci = function (position) {
  position = +position;
  if (position < 0) {
    return "OOPS";
  }

  // 0 1 1 2 3
  // 0 1 2 3 4
  let fibNums = [0, 1];
  let fibNum;
  for (let i = 1; i < position; i++) {
    fibNum = fibNums[i] + fibNums[i - 1];
    fibNums.push(fibNum);
  }
  return fibNums[position];
};

// Do not edit below this line
module.exports = fibonacci;

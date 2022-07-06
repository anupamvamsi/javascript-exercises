const reverseString = function (inputString) {
  let resultString = '';
  console.log(`res: ${resultString}`);
  for (let i = inputString.length - 1; i > -1; i--) {
    resultString += inputString[i];
  }
  console.log(resultString);

  return resultString;
};

// Do not edit below this line
module.exports = reverseString;

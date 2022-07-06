const repeatString = function (givenString, numOfRepeats) {
  let resultString = '';

  if (numOfRepeats < 0) {
    return 'ERROR';
  }

  for (let i = 0; i < numOfRepeats; i++) {
    resultString += givenString;
  }

  return resultString;
};

// Do not edit below this line
module.exports = repeatString;

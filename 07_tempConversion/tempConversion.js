const ftoc = function(degreeF) {
  if (degreeF == 32) {
    return 0;
  }
  let degreeC = 5 / 9 * (degreeF - 32);
  return Number(degreeC.toFixed(1));
};

const ctof = function(degreeC) {
  if (degreeC == 0) {
    return 32;
  }
  let degreeF = (9 / 5 * degreeC) + 32; 
  return +degreeF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

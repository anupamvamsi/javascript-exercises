const removeFromArray = function (array, elements) {
  // console.log(Array.isArray(array));
  // console.log(arguments[0], arguments[1], arguments[2], arguments[3]);
  let i = 1;

  while (arguments[i] != undefined) {
    let j = array.indexOf(arguments[i]);
    
    if (j >= 0) {
      array.splice(array.indexOf(arguments[i]), 1);
    }
    i++;
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

const palindromes = function (value) {
  value = value.toLowerCase();
  value = value.split("");
  value = value.filter((ch) => {
    if (ch != "." && ch != "!" && ch != "," && ch != "?" && ch != " ") {
      return ch;
    }
  });

  value = value.join("");

  let valueLength = value.length;
  let rebuildValue = "";

  for (let i = valueLength - 1; i >= 0; i--) {
    rebuildValue += value[i];
  }

  if (rebuildValue === value) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;

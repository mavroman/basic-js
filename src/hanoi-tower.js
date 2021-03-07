const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let a = (2 ** disksNumber) - 1
  let b =  Math.floor(a * 60 * 60 / turnsSpeed)
  let obj = {
   turns: a,
   seconds: b
  }

  return obj
};

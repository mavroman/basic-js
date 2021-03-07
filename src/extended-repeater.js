const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options.repeatTimes = typeof options.repeatTimes != 'undefined' ? options.repeatTimes : 1;
  options.additionRepeatTimes = typeof options.additionRepeatTimes != 'undefined' ? options.additionRepeatTimes : 1;
  options.separator = typeof options.separator != 'undefined' ? options.separator : '+';
  options.additionSeparator = typeof  options.additionSeparator != 'undefined' ?  options.additionSeparator : '|';
  options.addition = typeof  options.addition != 'undefined' ?  options.addition : '';
  return ((((str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes).slice(0, -(options.additionSeparator.length)))) +     options.separator).repeat(options.repeatTimes)).slice(0, -(options.separator.length))
};
  
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string") {
    return false;
  } else {
    if (sampleActivity < 1 || isNaN(sampleActivity)) {
      return false;
    } else {
      let y = Math.ceil(
        Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
      );
      return y < 1 ? false : y;
    }
  }
};

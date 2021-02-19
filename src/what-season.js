const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if(date === undefined) {
    return 'Unable to determine the time of year!'
  }

  if(date instanceof Date){
    if(Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Error');
  
    let season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall',           'winter']
    return season[date.getMonth()]
  }
  throw new Error('Error');
};

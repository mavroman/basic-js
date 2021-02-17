const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  let arr = [].concat(...backyard)
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '^^') {
     count+=1
     
    }
    
  }
  return count
};

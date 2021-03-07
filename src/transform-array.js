const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
let newArr = [...arr]
  if(typeof newArr != 'object'){
    throw new Error
  } else {
  for(let i = 0; i < arr.length; i++){
    switch(newArr[i]){
       case undefined:
         newArr.splice(i, 1);
         break;
       case '--discard-next':
         i === newArr.length - 1 ? newArr.splice(newArr.length - 1, 1) : newArr.splice(i, 2);
         break;
       case '--double-prev':
         i === 0 ? newArr.splice(i, 1) : newArr.splice(i, 1, newArr[i-1]);
         break;
       case '--double-next':
         i === newArr.length - 1 ? newArr.splice(newArr.length - 1, 1) : newArr.splice(i, 1, newArr[i+1]);
         break;
       case '--discard-prev':
         i === 0 ? newArr.splice(i, 1) : newArr.splice(i-1, 2);
         break;
     }
    switch(newArr[i]){
      case '--discard-next':
      case '--double-prev':
      case '--double-next':
      case '--discard-prev':
      newArr.splice(i, 1);
        break;
    }
   }
  return newArr
  }
  
};

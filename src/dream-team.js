const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(x) {
  // remove line with error and write your code here
  let newArr = []
  for(let i = 0; i < x.length; i++){
    if(typeof x[i] ===  'string'){
      newArr.push(x[i])
    }
  }
  let namePass = newArr.map(e=>e[0]).sort().join('')
   
   return namePass
};

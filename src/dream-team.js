const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(x) {
  if(Array.isArray(x)){
    let y = x.map(e=>e.split(' ').join(''))
    let newArr = []
    for(let i = 0; i < y.length; i++){
      if(typeof y[i] ===  'string'){
        newArr.push(y[i])
      } 
    }
    let namePass = newArr.map(e=>e[0]).sort().join('')
     
     return namePass.toUpperCase()
    } else {
    return false
  }
};

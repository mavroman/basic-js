const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(x) {
  if(Array.isArray(x)){

    let newArr = []
    for(let i = 0; i < x.length; i++){
      if(typeof x[i] ===  'string'){
        newArr.push(x[i].split(' ').join(''))
      } 
    }
    let namePass = newArr.map(e=>e[0]).sort().join('')
     
     return namePass.toUpperCase()
    } else {
    return false
  }
};

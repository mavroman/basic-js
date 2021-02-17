const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(x) {
  if(Array.isArray(x)){

    let newArr = []
    for(let i = 0; i < x.length; i++){
      if(typeof x[i] ===  'string'){
        newArr.push(x[i].toUpperCase().split(' ').join(''))
      } 
    }
    let namePass = newArr.map(e=>e[0]).sort().join('')
     
     return namePass
    } else {
    return false
  }
};

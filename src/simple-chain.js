const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    value === undefined ?  this.arr.push(''): this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if((typeof position === 'number') && (position <= this.arr.length) && (position > 0)){
      this.arr.splice(position-1, 1);
      return this;
    }else{
      this.arr = [];
      throw new Error;
      
    } 
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const finish = this.arr.map(e => e = `( ${e} )`);
    this.arr = [];
    return finish.join('~~')

  }
};

module.exports = chainMaker;

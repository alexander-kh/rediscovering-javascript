'use strict';

//Your code goes here
class Tax {
  
  static forAmount(amount) {
    return Tax.stateRate * amount;
  }
}

Tax.stateRate = 0.08;

console.log(Tax.stateRate); //0.08
console.log(Tax.forAmount(100)); //8

const forAmount = Tax.forAmount;
this.stateRate = 0.01;
console.log(forAmount.call(this, 100)); //8
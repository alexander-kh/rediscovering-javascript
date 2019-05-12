'use strict';

class Base {
  copy() {
    //Your code goes here
    const constructor =
      Reflect.getPrototypeOf(this).constructor[Symbol.species] ||
        Reflect.getPrototypeOf(this).constructor;
    
    return new constructor();
  }
}

class Derived1 extends Base {
  //Your code goes here
  static get [Symbol.species]() {
    return Base;
  }
}

class Derived2 extends Base {
  //Your code goes here
  static get [Symbol.species]() {
    return Derived2;
  }
}

const derived1 = new Derived1();
const derived2 = new Derived2();

console.log(derived1.copy()); //Base {}
console.log(derived2.copy()); //Derived2 {}
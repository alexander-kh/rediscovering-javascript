'use strict';

class Counter {
  constructor() {
    this.count = 0;
  }

  incrementBy(value) { this.count += value; return this.count; }
  decrementBy(value) { this.count -= value; return this.count; }
}

const call = function(target, property, ...data) {
  return Reflect.apply(target[property], target, data);
}

const counter = new Counter();

console.log(call(counter, 'incrementBy', 10));
console.log(call(counter, 'decrementBy', 7));
console.log(counter.count);

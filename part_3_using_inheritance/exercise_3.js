'use strict';

//Your code goes here
class BoundedSet extends Set {
  constructor(capacity, elements) {
    super();
    this.capacity = capacity;
    
    if (elements.length <= capacity) {
      elements.forEach(element => this.add(element));
    }
  }
  
  add(element) {
    if (this.has(element)) return;
    
    if (this.size < this.capacity) {
      super.add(element);
    } else {
      throw new Error(`exceeded capacity of ${this.capacity} elements`);
    }
  }
}

const set = new BoundedSet(5, ['Apple', 'Banana', 'Grape', 'Mangoe']);

set.add('Orange');
set.add('Apple');

try {
  set.add('Tangerine');
} catch(ex) {
  console.log(ex.message); //exceeded capacity of 5 elements
}

set.delete('Grape');
set.add('Peach');
console.log(set.size); //5

const set2 = new BoundedSet(2, ['Apple', 'Banana', 'Grape']);
console.log(set2.size); //0
console.log(set2); //BoundedSet { capacity: 2}
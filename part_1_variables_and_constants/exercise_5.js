'use strict';

const person = Object.freeze(
  { name: 'John Doe', address: { street: '101 Main St.', city: 'New York' } });

person.address.street = '102 Main St.';

console.log(person);

//Freeze is not deep. Only the top-level object is read-only. The program changes an object at a lower level.
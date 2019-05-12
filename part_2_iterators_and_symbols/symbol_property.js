const age = Symbol('ageValue');
const email = 'emailValue';

const sam = {
  first: 'Sam',
  [email]: 'sam@example.com',
  [age]: 2
};

console.log('iterating over properties:');
for(const property in sam) {
  console.log(property + ' : ' + sam[property]);
}

console.log('list of property names:');
console.log(Object.getOwnPropertyNames(sam));

console.log('list of symbol properties');
console.log(Object.getOwnPropertySymbols(sam));

console.log('accessing a symbol property:');
console.log(sam[age]);

console.log('changing value...');
sam[age] = 3;
console.log(sam[age]);
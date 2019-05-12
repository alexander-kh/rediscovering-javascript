const text = new String('live');

try {
  text.reverse();
} catch(ex) {
  console.log(ex.message);
}

text.reverse = function() { return this.split('').reverse().join(''); };

console.log(text.reverse());

const anotherText = new String('rats');

try {
  anotherText.reverse();
} catch(ex) {
  console.log(ex.message);
}

const primitiveText = 'part';

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
};

console.log(text.reverse());
console.log(anotherText.reverse());
console.log(primitiveText.reverse());

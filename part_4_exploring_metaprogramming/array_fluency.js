const langs = ['JavaScript', 'Ruby', 'Python', 'Closure'];

Object.defineProperties(Array.prototype, {
  first: {
    get: function() { return this[0]; },
    set: function(value) { this[0] = value; }
  },
  last: {
    get: function() { return this[this.length - 1]; },
    set: function(value) { this[Math.max(this.length - 1, 0)] = value; }
  }
});

const firstElement = langs[0];
const lastElement = langs[langs.length - 1];

console.log(firstElement);
console.log(lastElement);

langs.first = 'Modern JavaScript';
langs.last = 'ClosureScript';

console.log(langs);
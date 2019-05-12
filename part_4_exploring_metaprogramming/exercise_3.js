Object.defineProperties(Number.prototype, {
  integerPart: {
    get: function() { return this.toString().split('.')[0]; }
  },
  fractionalPart: {
    get: function() { return this.toString().split('.')[1] || 0; }
  }
});

const printParts = function(number) {
  console.log(
    `whole: ${number.integerPart} decimal: ${number.fractionalPart}`
  );
};

printParts(22.12);
printParts(.14);
printParts(-23.19);
printParts(42);
//the function goes here.
//My variant
// const amountAfterTaxes = function(
//   amount, fedTax = 0, stateTax = 0, localTax = 0) {
//     return Math.floor(
//       amount * (100 + fedTax + stateTax + localTax)) / 100;
// };

//Answer
// const amountAfterTaxes = function(amount, ...taxes) {
//   const computeTaxForAmount = function(tax) {
//     return amount * tax / 100.0;
//   };
//
//   const totalValues = function(total, value) {
//     return total + value;
//   };
//
//   return taxes.map(computeTaxForAmount)
//     .reduce(totalValues, amount).toFixed(2);
// };

//or, using arrow functions:
const amountAfterTaxes = function(amount, ...taxes) {
  return taxes.map(tax => amount * tax / 100.0)
    .reduce((total, value) => total + value, amount)
    .toFixed(2);
};

const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;

console.log(amountAfterTaxes(amount)); //25.12
console.log(amountAfterTaxes(amount, fedTax)); //27.63
console.log(amountAfterTaxes(amount, fedTax, stateTax)); //28.13
console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax)); //28.26
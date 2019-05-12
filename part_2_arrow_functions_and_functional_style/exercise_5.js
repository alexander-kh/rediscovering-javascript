'use strict';

const numbers = [1, 5, 2, 6, 8, 3, 4, 9, 7, 6];

console.log(
  numbers.filter(number => number % 2 === 0)
    .map(number => number * 2)
    .reduce((total, number) => total + number));
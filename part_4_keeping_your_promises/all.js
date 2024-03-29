const fs = require('fs-extra');
const request = require('request-promise');

const countPrimes = function(number) {
  if (isNaN(number)) {
    return Promise.reject(`'${number}' is not a number`);
  }

  return request(`http://localhost:8084?number=${number}`)
    .then(count => `Number of primes from 1 to ${number} is ${count}`);
};

const countPrimesForEachLine = function(pathToFile) {
  fs.readFile(pathToFile)
    .then(content => content.toString())
    .then(content => content.split('\n'))
    .then(lines => Promise.all(lines.map(countPrimes)))
    .then(counts => console.log(counts))
    .catch(error => console.log(error));
};

countPrimesForEachLine('numbers.txt');
countPrimesForEachLine('numbers_with_error.txt');
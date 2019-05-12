const product = function(first, second = 1, ...moreValues) {
  console.log(first + ', ' + second + ', length:' + moreValues.length);
};

//BROKEN CODE
const notAllowed = function(first, second, ...moreValues = [1, 2, 3]) {}
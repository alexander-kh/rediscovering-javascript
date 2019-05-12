//using anonymous functions
// const pickNamesInUpperCaseOfLength = function(names, length) {
//   return names.filter(function(name) { return name.length === length; })
//     .map(function(name) { return name.toUpperCase(); })
//     .join(', ');
// };

//using arrow functions
const pickNamesInUpperCaseOfLength = function(names, length) {
  return names.filter((name) => name.length === length)
    .map((name) => name.toUpperCase())
    .join(', ');
};

console.log(pickNamesInUpperCaseOfLength(['Alex', 'John', 'Roberto'], 4));
const pickNamesInUpperCaseOfLength = function(names, length) {
  let result = '';
  
  for(let i = 0; i < names.length; i++) {
    if(names[i].length === length) {
      result += names[i].toUpperCase() + ', ';
    }
  }
  
  return result.substring(0, result.length - 2);
};

console.log(pickNamesInUpperCaseOfLength(['Alex', 'John', 'Roberto'], 4));
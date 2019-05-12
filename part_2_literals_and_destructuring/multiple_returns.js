const getPresidentName = function(number) {
  //implemented only for number 6
  return ['John', 'Quincy', 'Adams'];
};

// const president6 = getPresidentName(6);
// const firstName = president6[0];
// const lastName = president6[2];

//rewrite the receiving side using destructuring
// const [firstName, middleName, lastName] = getPresidentName(6);

//if we cared only about the first name and not the other details,
//we would gently extract only the first name
// const [firstName] = getPresidentName(6);

//more generally, we can extract only the specific values we care about and
//ignore the ones in the positions in between using an empty argument
// const [firstName,, lastName] = getPresidentName(6);

//JavaScript does not get angry if we try to extract more than what's available
// const [firstName,, lastName, nickName='Old Man Eloquent'] = getPresidentName(6);
// console.log(nickName);

//if we care to give a name for one or more variables but don't want to lose the rest of the values, we can gather them into an array using the ...rest operator
const [firstName, ...otherParts] = getPresidentName(6);
console.log(firstName);
console.log(otherParts);

//we can use the destructuring feature to swap two values
let [a, b] = [1, 2];
console.log(`a=${a} b=${b}`);
[a, b] = [b, a];
console.log(`a=${a} b=${b}`);

//extracting parameter values
const printFirstAndLastOnly = function([first,, last]) {
  console.log(`first ${first} last ${last}`);
};
printFirstAndLastOnly(['John', 'Q', 'Adams']);
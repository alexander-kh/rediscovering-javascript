const weight = 'WeightKG';

const sam = {
  name: 'Sam',
  age: 2,
  height: 110,
  address: { street: '404 Missing St.' },
  shipping: { street: '500 NoName St.' },
  [weight]: 15,
  [Symbol.for('favoriteColor')]: 'Orange',
};

// const firstName = sam.name;
// const theAge = sam.age;

console.log(sam);

// const { name, age: theAge } = sam;
// console.log(name);
// console.log(theAge);

const { [weight]: wt, [Symbol.for('favoriteColor')]: favColor } = sam;
console.log(wt);
console.log(favColor);

const { lat, lon, favorite: liked = true } = { lat: 84.45, lon: -114.12 };
console.log(lon);
console.log(liked);

//extracting when passing to a function
//let's create a function that receives the sam object and prints the name and age
// const printInfo = function(person) {
//   console.log(`${person.name} is ${person.age} years old`);
// };
// printInfo(sam);

//using the object destructuring syntax, we can combine parameter declaration with object value extraction. Let's reimplement the printInfo() function to use object destructuring
// const printInfo = function({name: theName, age: theAge}) {
//   console.log(`${theName} is ${theAge} years old`);
// };
// printInfo(sam);

//if we want to keep the local variable names/parameters the same name as the properties, we can use the shorthand notation, like so:
const printInfo = function({name, age}) {
  console.log(`${name} is ${age} years old`);
};
printInfo(sam);

//deep destructuring
const { name, address: { street }, shipping: { street: shipStreet } } = sam;
console.log(name);
console.log(street);
console.log(shipStreet);

let theName = '--';
({ name: theName } = sam);
console.log(theName);
const addAge = function(person, theAge) {
  return { ...person, last: person.last.toUpperCase(), age: theAge };
}

const parker = { first: 'Peter', last: 'Parker',
  email: 'spiderman@superheroes.example.com' };

console.log(addAge(parker, 15));
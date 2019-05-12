const greet = function(...names) {
  console.log('hello ' + names.join(', '));
};

const jack = 'Jack';
const jill = 'Jill';
greet(jack, jill);

const tj = ['Tom', 'Jerry']
greet(tj[0], tj[1]);

//the spread operator
greet(...tj);
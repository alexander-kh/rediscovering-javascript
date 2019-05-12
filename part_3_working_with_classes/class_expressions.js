const createClass = function(...fields) {
  return class {
    constructor(...values) {
      fields.forEach((field, index) => this[field] = values[index]);
    }
  };
};

const Book = createClass('title', 'subtitle', 'pages');
const book = new Book(
  'Rediscovering JavaScript', 'Master ES6, ES7, and ES8', 286);
console.log(book);

const Actor = createClass('firstName', 'lastName', 'yearStarted');
const fisher = new Actor('Carrie', 'Fisher', 1969);
console.log(fisher);
this.stuff = 'from lexical scope';
const someValue = 4;
const self = this;

setTimeout(() => {
  console.log('someValue is ' + someValue); //lexical scope for someValue
  console.log('this...' + this.stuff); //lexical scope for this
  console.log('self...' + self.stuff); //lexical scope for self
}, 1000);
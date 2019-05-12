this.stuff = 'from lexical scope';
const someValue = 4;
const self = this;

setTimeout(function() {
  console.log('someValue is ' + someValue); //lexical scope for someValue
  console.log('this...' + this.stuff); //dynamic scope for this
  console.log('self...' + self.stuff); //lexical scope for self
}, 1000);
const handler = {
  get: function(target, propertyName, receiver) {}
};

const sample = {};
const proxy = new Proxy(sample, handler);
const value = proxy.foo;

console.log('target refers to sample');
console.log('propertyName refers to foo');
console.log('receiver refers to proxy');

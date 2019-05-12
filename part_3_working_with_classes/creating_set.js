const names = new Set(['Jack', 'Jill', 'Jake', 'Jack', 'Sara']);
console.log(names.size);
console.log(names);

names.add('Mike');
names.add('Kate')
  .add('Kara');

console.log(names.has('Mike'));
names.delete('Mike');
console.log(names.has('Mike'));

console.log(names.keys());
console.log(names.values());
console.log(names.entries());

for(const name of names) {
  console.log(name);
}

names.forEach(name => console.log(name));

[...names].filter(name => name.startsWith('J'))
  .map(name => name.toUpperCase())
  .forEach(name => console.log(name));
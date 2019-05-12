// setTimeout(function repeat(count) {
//   console.log('called...');
//   if(count > 1)
//     setTimeout(repeat.bind(null, count - 1), 1000);
// }.bind(null, 5), 1000);

const repeat = function repeat(count) {
  console.log('called...');
  if(count > 1)
    setTimeout(repeat.bind(null, count - 1), 1000);
};

setTimeout(repeat.bind(null, 5), 1000);
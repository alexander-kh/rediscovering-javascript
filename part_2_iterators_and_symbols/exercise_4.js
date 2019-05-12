const fibonacciSeries = function*() {
  let current = 1;
  let next = 1;
  
  yield* [current, next];
  
  while(true) {
    const temp = current;
    current = next;
    next = next + temp;
    
    yield next;
  }
}

for(const value of fibonacciSeries()) {
  if(value > 25) break;
  process.stdout.write(value + ', ');
}
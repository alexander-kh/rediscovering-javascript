const f1 = function() {
  if(new.target) {
    console.log('called as a constructor');
  }
  else {
    console.log('called as a function');
  }
};

new f1();
f1();
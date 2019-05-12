'use strict';

const canVote = function(age) {
  if(age === 18) {
    return 'yay, start voting';
  }
  if(age > 18) {
    return 'please vote';
  }
  
  return "no, can't vote";
};

console.log(canVote(12));
console.log(canVote("12"));
console.log(canVote(17));
console.log(canVote('@18'));
console.log(canVote(18));
console.log(canVote(28));
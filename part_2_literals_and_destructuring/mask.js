const mask = function(texts, ...expressions) {
  
  const createMask = (text) => '*'.repeat(text.length);
  
  const maskedText = expressions
    .map((expression, index) =>
      `${texts[index]}${createMask(expression.toString())}`)
    .join('');
  
  const closingText = texts[texts.length - 1];
  
  return `${maskedText}${closingText}`;
};

const agent = 'Bond';
const organization = 'MI6';

console.log(mask`Him I'm ${agent}, with ${organization}.`);
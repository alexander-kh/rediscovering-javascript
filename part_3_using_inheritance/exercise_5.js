'use strict';

class SpecialWordChecker {
  isSpecial(word) { return word !== word; }
}

class PalindromeChecker extends SpecialWordChecker {
  //Your code goes here
  isSpecial(word) {
    return word === [...word].reverse().join('') || super.isSpecial(word);
  }
}

class AlphabeticalChecker extends SpecialWordChecker {
  //Your code goes here
  isSpecial(word) {
    return word === [...word].sort().join('') || super.isSpecial(word);
  }
}

const checkIfSpecial = function(specialWordChecker, word) {
  const result = specialWordChecker.isSpecial(word) ? 'is' : 'is not';
  console.log(`${word} ${result} special`);
};

const palindromeChecker = new PalindromeChecker();
checkIfSpecial(palindromeChecker, 'mom'); //mom is special
checkIfSpecial(palindromeChecker, 'abe'); //abe is not special

const alphabeticalChecker = new AlphabeticalChecker();
checkIfSpecial(alphabeticalChecker, 'mom'); //mom is not special
checkIfSpecial(alphabeticalChecker, 'abe'); //abe is special

// Combine PalindromeChecker and AlphabeticalChecker here
const alphabeticalAndPalindromeChecker =
  Object.setPrototypeOf(
    Object.getPrototypeOf(new AlphabeticalChecker()),
    new PalindromeChecker());

checkIfSpecial(alphabeticalAndPalindromeChecker, 'mom'); //mom is special
checkIfSpecial(alphabeticalAndPalindromeChecker, 'abe'); //abe is special
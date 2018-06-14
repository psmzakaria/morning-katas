/* Write a function `isPalindrome()` to determine whether an input string is a palindrome or not 

A palindrome is a word, phrase, number, or other sequence of characters which 
reads the same backward as forward, such as madam or racecar. 

`input` will be a single string without spaces and punctuation. */
const isPalindrome = input => {
  const reversedInput = input.split("").reverse().join("");
  if (input === reversedInput) return true;
  return false;
};

module.exports = isPalindrome;

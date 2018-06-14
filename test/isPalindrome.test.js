const isPalindrome = require("../src/isPalindrome");
const assertEquals = require("../assert-helper");

assertEquals(isPalindrome(""), true);
assertEquals(isPalindrome("x"), true);
assertEquals(isPalindrome("xy"), false);
assertEquals(isPalindrome("yy"), true);
assertEquals(isPalindrome("xyx"), true);
assertEquals(isPalindrome("tacocat"), true);
assertEquals(isPalindrome("tacoca"), false);
assertEquals(isPalindrome("!?!"), true);
assertEquals(isPalindrome("12321"), true);
assertEquals(isPalindrome("1234"), false);

// Test cases: actual --> expected
// isPalindrome('') --> true
// isPalindrome('a') --> true
// isPalindrome('ab') --> false
// isPalindrome('abc') --> false
// isPalindrome('abba') --> true
// isPalindrome('tacocat') --> true
// isPalindrome('racecar') --> true
// isPalindrome('umbrella') --> false

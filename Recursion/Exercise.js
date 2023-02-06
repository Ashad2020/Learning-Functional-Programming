"use strict";

function isPalindrom(str) {
  if (str.length <= 1) return true;
  var first = str[0];
  var last = str[str.length - 1];
  if (first === last) {
    return isPalindrom(str.substring(1,str.length - 1));
  }
  return false;
}

console.log( isPalindrom("") === true);
console.log( isPalindrom("a") === true);
console.log( isPalindrom("aa") === true);
console.log( isPalindrom("aba") === true);
console.log( isPalindrom("abba") === true);
console.log( isPalindrom("abccba") === true);

console.log( isPalindrom("ab") === false);
console.log( isPalindrom("abc") === false);
console.log( isPalindrom("abca") === false);
console.log( isPalindrom("abcdba") === false);

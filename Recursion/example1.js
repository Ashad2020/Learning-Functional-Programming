function isVowel(char) {
  return ['a','e','i','o','u'].includes(char);
}

function countVowel(str) {
  if (str.length == 0) return 0; // Base condition for returning;
  var first = (isVowel(str[0]) ? 1 : 0);
  return first + countVowel( str.slice(1) );
}
// function countVowel(str) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (isVowel(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

console.log(countVowel("The quick brown fox jumps over the lazy dog"));
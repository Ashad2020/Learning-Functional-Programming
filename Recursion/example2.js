function isVowel(char) {
  return ['a','e','i','o','u'].includes(char);
}
  // Base Condition Location
  function countVowel(str) {
    var first = (isVowel(str[0]) ? 1 : 0);
    if (str.length <= 1) return first;
    return first + countVowel( str.slice(1) );
  }

  console.log(countVowel("The quick brown fox jumps over the lazy dog"));
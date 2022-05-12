//   steps
// -Split the string into an array of strings
//-Sort the elements in the array
//-return the length of the first element of this array.
       
function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(longestWord.length);
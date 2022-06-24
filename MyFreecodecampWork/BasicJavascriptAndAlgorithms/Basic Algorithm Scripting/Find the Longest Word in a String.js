/*    Question

Return the length of the longest word in the provided sentence.

Your response should be a number.

*/


function findLongestWordLength(str) {
    let newStr = str.split(" ")
    console.log(newStr)
    return (newStr.sort((a, b) => b.length - a.length)[0]).length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
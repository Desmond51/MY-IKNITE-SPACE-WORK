/*
Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7

*/gi
//  steps

//1- Loop through the given words
// 2- create a variable name largestWord
// 3- for each iterative word check if it's greater than largestWord
// 4- if the above condition validate to true, set String length.

    // solution 1
    function  longes(words) {
        let unModifiedArr = [...words] 
        let largestWord = unModifiedArr[0].length;
        // console.log(largestWord)
       for (let keys in unModifiedArr) {
        // console.log(keys)
        if (unModifiedArr[keys].length > largestWord) {
            largestWord = unModifiedArr[keys].length
        } 
       }
       return largestWord;
    }

    //1- Loop through the given words
    // 2- create a variable name largestWord
    // 3- for each iterative word check if it's greater than largestWord
    // 4- if the above condition validate to true, set String length.
    
        // solution 1
        function  longes(words) {
            let unModifiedArr = [...words] 
            let largestWord = unModifiedArr[0].length;
            // console.log(largestWord)
           for (let keys in unModifiedArr) {
            // console.log(keys)
            if (unModifiedArr[keys].length > largestWord) {
                largestWord = unModifiedArr[keys].length
            } 
           }
           return largestWord;
        }




// test

longest(['simple', 'is', 'better', 'than', 'complex']) // => 7
longest(['explicit', 'is', 'better', 'than', 'implicit']);// => 8
longest(['beautiful', 'is', 'better', 'than', 'ugly']); // => 9

/*

function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  //return longestWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(longestWord.length);
*/
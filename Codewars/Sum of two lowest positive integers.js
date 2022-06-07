/*    Question 


Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/



function sumTwoSmallestNumbers(numbers) {  
    //Code here
    
    let ordered = numbers.sort(function(a,b){return a-b;});
  let result = 0;
  
  for (let i = 0; i < ordered.length; i++){
    if (i===0){
      result+=ordered[0];
    }
    if (i===1){
      result+=ordered[1];
    }
  }
  return result;
  }


  //  Test
sumTwoSmallestNumbers([5, 8, 12, 19, 22])//, 13 , "Sum should be 13");
sumTwoSmallestNumbers([15, 28, 4, 2, 43])//, 6 , "Sum should be 6");
sumTwoSmallestNumbers([3, 87, 45, 12, 7])//, 10 , "Sum should be 10");
sumTwoSmallestNumbers([23, 71, 33, 82, 1])//, 24 , "Sum should be 24");
sumTwoSmallestNumbers([52, 76, 14, 12, 4])//, 16 , "Sum should be 16");

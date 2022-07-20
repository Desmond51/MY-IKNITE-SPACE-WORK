/*  Question 


We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
function sumAll(arr) {
    //STEPS
  // Figure out the minimum and maximum numbers in the array

  // loop and add all numbers from lowest to highest value

  // return the sum

  const firstNum = Math.min(...arr);
  const secondNum = Math.max(...arr);
  let sum = 0;
  for(let i=firstNum; i<=secondNum; i++){
  sum +=i
  }
  return sum;


  
}

sumAll([1, 4]);
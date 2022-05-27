// Return a Number (8kyu)
/*  Question

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?


        Steps
-Pass two conditions that evaluates if number is less than or greater than 0.
-The condition that has graeter than should be multiplied to -1. 




*/

function makeNegative(num) {
   
    if(num>0){
    return num * -1;
    } else {

  return num;
  }

}

//   Test


makeNegative(42)//, -42);
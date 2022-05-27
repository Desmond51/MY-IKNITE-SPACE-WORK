
 //  Convert a Boolean to a String (8kyu)


/* Problems

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.


        Steps
-Pass two conditions that evaluates to true or false.
-Each of the conditions should return a string. 



*/


function booleanToString(b) {
    console.log(b);
   
    if(b == true){
    return "true";

    } else {
  return "false";
  }

}

//  Test
booleanToString(true)// "true", 'When we pass in true, we want the string "true" as output');
booleanToString(false) //"false", 'When we pass in false, we want the string "false" as output');

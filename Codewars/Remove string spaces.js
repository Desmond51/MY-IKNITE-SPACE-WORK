//   Remove String Spaces (8kyu)


/*     Problem

Simple, remove the spaces from the string, then return the resultant string.

*/
//    Steps
/*
- Create a function to call our noSpace.
- Give it a parameter name x
- Assign it to a  string 
- use regular expression and replace function to remove spaces
-Use the replace function with t


*/

function noSpace(x){
    let newStr = x;
    let final = newStr.replace(/\s+/g, ""); 
    console.log(final);
    return final;
   }
   
   noSpace("Say coding is good");

              // Sample Test

noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')//'8j8mBliB8gimjB8B8jlB');
noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd') //'88Bifk8hB8BB8BBBB888chl8BhBfd'); 
noSpace('8aaaaa dddd r     ') //'8aaaaaddddr'); 
        
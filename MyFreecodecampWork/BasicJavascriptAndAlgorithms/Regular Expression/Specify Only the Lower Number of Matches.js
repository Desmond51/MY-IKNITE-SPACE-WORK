/*  Question

Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.

*/


let haStr = "Hazzzzah";
let haRegex = /Hazz{3,}ah/i; // Change this line
let result = haRegex.test(haStr);
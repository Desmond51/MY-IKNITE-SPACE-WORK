/*  Question

Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.


*/  

// Only change code below this line
const increment = (function() {
    
    return function increment(number, value=1) { 
           return number + value;
    };
})();
// Only change code above this line
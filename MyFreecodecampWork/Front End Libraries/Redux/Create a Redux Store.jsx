/*  Question
Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.

Note: The code in the editor uses ES6 default argument syntax to initialize this state to hold a value of 5. If you're not familiar with default arguments, you can refer to the ES6 section in the Curriculum which covers this topic.

*/

const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  const store = Redux.createStore (reducer);
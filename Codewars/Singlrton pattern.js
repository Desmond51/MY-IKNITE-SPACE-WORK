/*    Question  

In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

Create an Singleton pattern, so there is one object in system.

Example:

var obj1 = new Singleton();
var obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
obj2.test; // => 1



 */
var Singleton = function(){
    // implement singleton Class
  };


//Singleton class
var Singleton = (function () {
    var instance;
 
    function createDBInstance() {
        var object = new Object("I am the DataBase instance");
        return object;
    }
 
    return {
        getDBInstance: function () {
            if (!instance) {
                instance = createDBInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getDBInstance();
    var instance2 = Singleton.getDBInstance();
 
    console.log("Same instance? " + (instance1 === instance2));  
}
 
run(); // OUTPUT = "Same instance? true"

//      test

describe("Solution", function() {
    it("should test for something", function() {
      // Test.assertEquals(1 + 1, 2);
      // assert.strictEqual(1 + 1, 2);

    })
})


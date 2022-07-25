/*  Question

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.


*/


function destroyer(arr) {
    var args = Array.from(arguments);
    args.splice(0, 1);
    var target = args;

    return arr.filter(num => target.indexOf(num) === -1);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
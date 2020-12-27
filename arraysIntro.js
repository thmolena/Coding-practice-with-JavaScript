// variables have var at the beginning
var myName = "Libery";
console.log(myName);
var sent;
sent = "My name is"
console.log(sent + myName)

// Note that the semiColons are optional but it is a great practice to include them. 

// Arrays
 /*Arrays
JavaScript can hold an array of variables in an Array object. In JavaScript, an array also functions as a list, a stack or a queue.

To define an array, either use the brackets notation or the Array object notation:
*/

var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3);
/*
Addressing
We can use the brackets [] operator to address a specific cell in our array. Addressing uses zero-based indices, so for example, in myArray the 2nd member can be addressed with index 1. One of the benefits of using an array datastructure is that you have constant time look-up, if you already know the index of the element you are trying to access.

console.log(myArray[1]);      // prints out 2
Arrays in JavaScript are sparse, meaning that we can also assign variables to random locations even though previous cells were undefined. For example:
*/
var myArray = []
myArray[3] = "hello"
console.log(myArray);
/*
Will print out:

[undefined, undefined, undefined, "hello"]
Array Elements
Because JavaScript Arrays are just special kinds of objects, you can have elements of different types stored together in the same array. The example below is an array with a string, a number, and an empty object.

var myArray = ["string", 10, {}]*/

var numsNames = [0,1,2,"Liberty"];
console.log(numsNames);

var objArray  = new Array (1,2,3) // this is another way of declaring an array
console.log(objArray)


// Array Manipulation
// can use push and pop (easy way to make an array work like a Stack)
//
var stack_arr = new Array(1,2,3,4,5,6,7,8,9,10)
stack_arr.pop()
console.log(stack_arr)
stack_arr.push(90) // adding new items to a list
console.log(stack_arr)


//Queues using shift and unsfhit
// note that all these methods work on the stack

stack_arr.unshift(10);
console.log(stack_arr) // unshift is like push
console.log(stack_arr.shift());

/*Splicing
Splicing arrays in JavaScript removes a certain part from an array to create a new array, 
made up from the part we took out. For example, if we wanted to remove the five numbers
from the following array beginning from the 3rd index, we would do the following:

var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,5);

console.log(splice);        // will print out 3,4,5,6,7
console.log(myArray);       // will print out 0,1,2,8,9
After splicing the array, it will only contain the part before and after the splicing. 
The splice is equal to all the variables between 3 and 7 (inclusive), and the remainder of the array,
 which contains all variables between 0 and 2 (inclusive), and 8 to 9 (inclusive).
*/

var stack_slice = stack_arr.splice(2,3);
console.log(stack_slice);

//methods to search through Arrays in JavaScript
let myNumbers = [1,2,3,4,5,6,7,8,9,10];
// Array.includes -> this returns true or false
console.log(myNumbers.includes(5));
// the syntax is like arr.includes(valueToFind,[fromIndex])

console.log(myNumbers.includes(2,2));
// can also use indexOf() -> this one returns the index of the element, else it returns -1 showing that the element was not found
console.log(myNumbers.indexOf(1)); // this should give a 0
console.log(myNumbers.indexOf(91)); // this should  give a -1



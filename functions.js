/*
Functions are code blocks that can have arguments, and function have their own scope. In JavaScript, functions are a very important feature of the program, and especially the fact that they can access local variables of a parent function (this is called a closure).

There are two ways to define functions in JavaScript - named functions and anonymous functions.

To define a named function, we use the function statement as follows:

function greet(name)
{
    return "Hello " + name + "!";
}

console.log(greet("Er.....ic"));      // prints out Hello Eric!
In this function, the name argument to the greet function is used inside the function to construct a new string and return it using the return statement.

To define an anonymous function, we can alternatively use the following syntax:

var greet = function(name)
{
    return "Hello " + name + "!";
}

console.log(greet("Eric"));      // prints out Hello Eric!
*/
function add(num1,num2){ // this is called a named fumnction
    return num1+num2;
}

console.log(add(1,1));

// anonymous function

var add2 = function(num1,num2){ // this is called an anonymous functio
    return num1 + num2;
}

console.log(add2(1,1));
//confirm("hi")
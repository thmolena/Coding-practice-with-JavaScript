console.log(typeof(1))
var y = 2e10
console.log(y)
var z = Infinity // so we have infinity and negative infinity
console.log(z)

// logical operators
// && this is and
// || this is or
//ternary operator (true ? 1:2);
// if the condition is  true, the middle is taken else the right is taken

var name = (5+2 > 1? 1:7);

console.log((5+2 > 1? 1:7))
var votingAGe = 17;
console.log(votingAGe>16?"Fine":"NotFine")

let number = 10;
while (number>0){ // this is the general structure of the number structure.
    console.log(number);
    number = number -1;
}

// this is how to make a for loop
let arr = []
for( let i=0; i<10; i=i+1){
    if(i%2==0){
        arr.push(i);
    }
}

console.log(arr)

for (let i=0;i<10;i=i+1){
    let sec = [];
    for(let j=0;j<i;j=j+1){
    sec.push("#");
    }
    console.log(sec);
}

// it is advisable to use let instead of var in JavaScript

/*
I can do a for loop, while loop, strings, arrays, and the basic syntax in JavaScript
 */

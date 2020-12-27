
// The following is a basic construciton of a class
/*
class ClassName {
    constructor() {  }
    method_1() { }
    method_2() { }
    method_3() { }
    }
  }
  */


class Name {
    constructor (dummy){
        this.something =dummy;
        this.nothing = null;
    }
}


// The following is an example if the car class

class Car {
    constructor (name,year){
        this.year=year;
        this.name = name;
    }
    // below is a funtion that finds the age of the car

    age(x){
        let years = x-this.year;
        return years;
    }
}

let date = new Date();
let year = date.getFullYear();
console.log(year);

let myCar = new Car("Ford",1998);
console.log("The age of my car in years is",myCar.age(year));

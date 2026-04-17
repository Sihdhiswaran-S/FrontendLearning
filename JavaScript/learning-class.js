class  Demo {
// class is a blueprint for creating objects. 
// It encapsulates data and functions that operate on that data.
//  Classes provide a way to create reusable code and organize it in a structured manner.

}
let demo = new Demo(); // instantiate the class to create an object
 console.log(demo);// Demo {} , Object

 class Car{

    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
 }
 let BMW = new Car("BMW", "M5");
 console.log(BMW); // Car { name: "BMW", model: "M5" }
 let audi = new Car("audi", "audi A4");
 console.log(audi); // Car { name: "audi", model: "audi A4" }   
// Learning concepts:lexical scoping, closures, and the scope chain

// Lexical scoping: The scope of a variable is determined by its position in the source code. 
// A function can access variables defined in its outer scope, but not variables defined in inner scopes.
// global scope
//local scope
//nested scope
//block scope

let ad="Eat Five star Do nothing"; // global scope
function Ramesh(){
    let one= "Ramesh is on set"; // local scope
    function Suresh(){
        let two="Suresh is on set"; // nested scope
        console.log(ad);
        console.log(one);
        console.log(two);
    }
    Suresh();
}
//console.log(one); // ReferenceError: one is not defined
Ramesh();
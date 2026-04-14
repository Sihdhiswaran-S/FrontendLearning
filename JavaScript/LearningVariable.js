// var name = "david";
// var name = "john";
// var age = "25";
// console.log(age);

// console.log("my Name is: ", name);

// let city = "Bengalore";
// city = "Mumbai"; // "let city ="mumbai" "This will throw an error because 'city' has already been declared with 'let' on the same scope. it cannot be redeclared or reassigned in the same scope.
// console.log("my City is: ", city);

// const state = "karnataka";
// state = "Maharashtra"; // This will throw an error because 'state' has been declared with 'const' and cannot be reassigned.
// console.log("my State is: ", state);
// scope of variables 

// {
//     let score = 89;
//     console.log("Rohit Sharma score: ", score);
// }
// console.log("Rohit Sharma score-----: ", score); //ReferenceError: score is not defined

// {
//     var score = 89;
//     console.log("Rohit Sharma score: ", score);
// }
// console.log("Rohit Sharma score-----: ", score); 

{
    const score = 89;
    console.log("Rohit Sharma score: ", score);
}
console.log("Rohit Sharma score-----: ", score); //ReferenceError: score is not defined

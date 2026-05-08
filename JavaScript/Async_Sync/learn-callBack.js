// call back ?
// passing function as an argument to another function to make sure function is not going to run before the task is completed but will run right after the task is completed
// call back is way to handle asynchronous programming in JavaScript
// call back function is a function that is passed as an argument to another function and is executed after some operation has been completed   
 function one(pavan){
   setTimeout(() => {
    console.log("function one");
    pavan();
   },3000);
}
 function two(){
    setTimeout(() => {
        console.log("function two");
    },1000);
}
one(two);


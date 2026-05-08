// // setTimeout(() => {
// //     console.log("printing the waithing information");
// // },3000);

// // console.log("printing the information");
// setInterval(() => {
//     console.log("printing the waithing information");
// },3000);


function one(){
   setTimeout(() => {
    console.log("function one");
   },3000);
}
 function two(){
    setTimeout(() => {
        console.log("function two");
    },1000);
}   
one();
two();
// // function Achieve() {
// //     console.log("i need to achieve some meaningful");
    
// // }
// // Achieve();
// // sum 0f two number
// function sum(n1,n2){
//     console.log(n1+n2);
    
// }
// sum(12,13);

// // function with return statement
// function sumWithReturnType(n1,n2){
//      return n2 + n1;
// }
// console.log(sumWithReturnType(12,13));
// //function Expresssion
// let a = function(n1,n2){
//     return n1*n2;
// }
// console.log(a(12,13));
// let b =(n1,n2) => {return n1+n2; }


// switch condition 
let orderstatus = "dispatch";
switch (orderstatus) {
    case "order":console.log("u have a order");
    break;
    case "dispatch":console.log("ur order is already delivered"); break;
    case "ofd":console.log("it is out of delivery");break;
    default:console.log("product not servicable");
    
}
let amt=6000;
switch(true){
    case amt>5000:console.log("vip"); break;
    case amt<2000:console.log("20% discount");break;
    default:{console.log("shop more get discount");}
}
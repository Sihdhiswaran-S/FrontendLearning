// for .. in loop is used to loop through the properties of an object. It is not recommended to use for .. in loop to loop through arrays because it will also loop through the inherited properties of the array.
let obj={
    name: "David",
    age:20,
    salary:10000,
};
for(let key in obj){
    console.log(`key:${key}, value:${obj[key]}`);
}
// for  of loop this is used for arrays and iterables
let Scores=[65,75,80,82,90];
for(let score of Scores){
    if(score>=75){
        console.log("its a distinction",score);
    }}
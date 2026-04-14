let value="*";
for (let i=1; i<=4; i++) {
        console.log(value.repeat(i));
}
console.log(" ");
let space=" ";
let count=4;
for (let i=1; i<=5; i++) {
    console.log(space.repeat(count)+value.repeat(i));
    count--;
}
console.log(" ");
for (let i=5; i>=1; i--) {
        console.log(value.repeat(i));
}
console.log(" ");
let row="";
for (let i=1; i<=5; i++) {
    row="";
    for (let j=1; j<=i;j++){
       row+="*";
    }
    console.log(row);
}
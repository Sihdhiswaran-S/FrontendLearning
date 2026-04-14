let city="Bangalore";
// console.log(city.length);
// console.log(city.charAt(0));
// console.log(city.repeat(3),"hello ");


// console.log(city.toLocaleLowerCase());
// console.log(city.toLocaleUpperCase());
console.log(city.slice(3, 6));
let arr=["Bangalore ","Mangalore","dharwad"];
console.log(arr.length);
console.log(arr[0]);
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log("i have a value",element);
}

// includes method
let str = "Bangalore is my town";
console.log(str.includes("myyyy"));
// indexOf method
let sentance="bangalore is my town";
console.log(sentance.indexOf("a"));
//split method
let payment="pay  on time";

console.log(payment.split(" "));//[ 'pay', '', 'on', 'time' ]
console.log(payment.split(""));//[  'p', 'a', 'y', ' ',  ' ', 'o', 'n', ' ',  't', 'i', 'm', 'e']
console.log(payment.split("  "));//[ 'pay', 'on time' ]
console.log(payment.split("a"));//[ 'p', 'y  on time' ]
// join method
console.log(payment.split("").join());//p,a,y, , ,o,n, ,t,i,m,e
console.log(payment.split("").join(""));//pay  on time

// replace method
let ipl ="we have daily match match match ";
// console.log(ipl.replace("match","cricket"));//we have daily cricket
console.log(ipl.replace("match","cricket"));//we have daily cricket match match
console.log(ipl.replaceAll("match","cricket"));//we have daily cricket cricket cricket

// trim method
let town ="Bangalore    ";
console.log(town.length);//13
console.log(town.trim().length);//9

//JS program count the occurance of letter e

let data = "i am attending an interview";
let splitdata=data.trim().split("");
let ecount=0;
splitdata.forEach(element => {
    if(element=="e"){
        ecount++;
    }
});
console.log(ecount);

// js program to find the largest word in input

let splitdataWord = data.trim().split(" ");
let word=" ";
console.log(word);
for(let i=0;i<splitdataWord.length;i++){
    if (word == " ") {
      word = splitdataWord[i];
    }
    else {
        if (word.length<=splitdataWord[i].length) {
            word=splitdataWord[i];
        } else {
            word=word;
        }
    }
}
console.log(word);
word = " ";
splitdataWord.forEach(element => {

    if(word==" "){
        word=element;
    }
    else{
        if (word.length<=element.length) {
            word=element;
            
        } else {
            word=word;
        }
    }
});
console.log(word);

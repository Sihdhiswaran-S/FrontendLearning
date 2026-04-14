// this keyword is used to refer to the current object related data
let name="John";
let obj={
    name: "David",
    sayhello:function(){
        let name=this.name;
        console.log(`Hello, my name is ${name}`);
    }
};
obj.sayhello();

let str = "bangalore";
function findFrequency(value  ){
    let op={};
    let char = value.split("");

    for(let i=0; i<char.length; i++){
        let charAt = char[i];
        op[charAt]=(op[charAt] || 0)+1;
        //op[key}=value of key in op object]
    }
    return op;
}
console.log(findFrequency(str));
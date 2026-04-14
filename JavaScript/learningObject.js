// object : collection of data thats holds key values pairs
// object is a non-primitive data type
// object is a reference data type
// object is a mutable data type
// object is a complex data type
let obj={
    name: "David",
    age: 30,
    city: "New York",
}
console.log(obj);
// accessing object properties
console.log(obj.name);
obj.salary=50000;
console.log(obj);
obj.city="Bangalore";
console.log(obj);
// deleting object properties
delete obj.city;
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));

// nested objects
let nestedObj={
    address:{
        city:"Bangalore",
        state:"Karnataka",
    },
    
}
console.log(nestedObj.address);
let mobile=[
    {name:"iPhone", brand:" Apple", country:"USA"},
    {name:"Galaxy", brand:"Samsung", country:"South Korea"},
    {name:"Nord series", brand:"OnePlus", country:"China"},
    {name:"iPhone 16", brand:"Apple", country:"USA"},
];
console.log(mobile);
for(let i=0; i<mobile.length; i++){
    if(mobile[i].brand==="Apple"){
        console.log(mobile[i]);
    }
}

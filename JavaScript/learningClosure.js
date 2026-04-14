// closure is process / method of retaining the value of outer function
function outerFunction(){
    let value = 0;
    
    function inner(){
        value++;
        console.log("my value is ",value);
    }
    // inner();
    return inner;
}

// outerFunction();
let out = outerFunction();
out();
out();
out();

function teashop(){
    let bill =0; // private variable
    let items = [];

    return function addBill(price,item){
        bill += price;
        items.push(item);
        console.log("Total bill: ₹ ",bill,"for",items);

    };

}

let bill1 = teashop();
bill1(10,"tea");// tea
bill1(20,"snacks");// snacks
bill1(30,"coffee");// coffee

let bill2 = teashop();
bill2(5,"tea");// tea
bill2(10,"snacks");// snacks
bill2(15,"coffee");// coffee
// output 
// Total bill: ₹  10for [ 'tea' ]
// Total bill: ₹  30for [ 'tea', 'snacks' ]
// Total bill: ₹  60for [ 'tea', 'snacks', 'coffee' ]
// Total bill: ₹  5for [ 'tea' ]
// Total bill: ₹  15for [ 'tea', 'snacks' ]
// Total bill: ₹  30for [ 'tea', 'snacks', 'coffee' ]
let arr=["Bengalore","Mangalore","udupi","dharwad","shivamogga"];
arr.push("Hassan");
console.log(arr);//["Bengalore", "Mangalore", "udupi", "dharwad", "shivamogga", "Hassan"];
console.log(arr.pop());//Hassan
console.log(arr.pop());//shivamogga
console.log(arr);//[ 'Bengalore', 'Mangalore', 'udupi', 'dharwad' ]
arr.unshift("Hassan");
console.log(arr);//[ 'Hassan', 'Bengalore', 'Mangalore', 'udupi', 'dharwad' ]
arr.unshift("shivamogga");
console.log(arr);//[ 'shivamogga', 'Hassan', 'Bengalore', 'Mangalore', 'udupi', 'dharwad' ] 
console.log(arr.shift());//shivamogga

arr.sort();
console.log(arr);//[ 'Bengalore', 'Hassan', 'Mangalore', 'dharwad', 'udupi' ]
arr.reverse();
console.log(arr);//[ 'udupi', 'dharwad', 'Mangalore', 'Hassan', 'Bengalore' ]
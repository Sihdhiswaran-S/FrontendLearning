let arr=[1,2,3,4,5,6];
let sumarrindex=[];
for (let i = 0;i < arr.length;i++) {
    for (let j = i; j < arr.length; j++) {
        if (arr[i]+arr[j] == 7) {
            sumarrindex.push([i, j]);
        }

    }
}
console.log(sumarrindex);
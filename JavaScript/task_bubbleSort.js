let arr=[-3,-20,20,7,1,9,-1];
function bubbleSort(arr){
    length = arr.length;
    for (let i = 0; i < length-1; i++) {
        for (let j = 0; j < length-1; j++) {
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        
    }
    console.log(arr);

}
console.log("Before sorting",arr);
bubbleSort(arr);

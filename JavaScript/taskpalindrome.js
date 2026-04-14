// function palindrome(str) {
//     if(str==str.split('').reverse().join('')){
//         return "palindrome";
//     }
// }
// console.log(palindrome("madam"));
function palindromebystep(str) {
    let strlength=str.length;
    for(let i=0; i<strlength; i++){
        if(str[i]===str[strlength-1-i]){

        }
        else{
            return "not a palindrome";
        }
    }
    return "palindrome"; 
}
console.log(palindromebystep("madam1"));


function isAnagram(str1, str2) {

    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    console.log(sortedStr1);
    console.log(sortedStr2);
    return sortedStr1 === sortedStr2;
}
let result1 = isAnagram("listen", "silent"); // true
let result2 = isAnagram("hello", "world"); // false
console.log(result1, result2);

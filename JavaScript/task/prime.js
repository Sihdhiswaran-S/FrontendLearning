// js program to find out given number is prime or not
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num ==2) {
        return true;
    } 
    if (num % 2 == 0) {
        return false;
    } else {
        for (let i = 2; i <num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
    }
    return true;
}
let number = 17;
if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}

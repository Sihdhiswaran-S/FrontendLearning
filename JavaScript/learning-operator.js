// Arithematic Operators
let a = 5;
let b = 3;
console.log("a + b: ", a + b); // Addition
console.log("a - b: ", a - b); // Subtraction
console.log("a * b: ", a * b); // Multiplication
console.log("a / b: ", a / b); // Division
console.log("a % b: ", a % b); // Modulus
console.log("a ** b: ", a ** b); // Exponentiation

// Assignment Operators
let result = 10;
result += 20; // result = result + 20
result -= 10; // result = result - 10
result *= 2; // result = result * 2
result /= 2; // result = result / 2
result **= 2; // result = result ** 2
result %= 12; // result = result % 2
console.log("result: ", result);
let a1 = "123";
let b1 = 123;
// Comparison Operators
console.log("a1 == b1: ", a1 == b1); // true (loose equality, type coercion)
console.log("a1 === b1: ", a1 === b1); // false (strict equality, no type coercion)
/* The '==' operator compares values for equality after performing type coercion if necessary. In this case, it converts the string "123" to the number 123 before comparing, resulting in true.

The '===' operator, on the other hand, compares both value and type without performing type coercion. Since "123" is a string and 123 is a number, they are not strictly equal, resulting in false. */
console.log("a1 != b1: ", a1 != b1); // false (loose inequality, type coercion)
console.log("a1 !== b1: ", a1 !== b1); // true (strict inequality, no type coercion)
/* The '!=' operator compares values for inequality after performing type coercion if necessary. In this case, it converts the string "123" to the number 123 before comparing, resulting in false.

The '!==` operator compares both value and type without performing type coercion. Since "123" is a string and 123 is a number, they are not strictly unequal, resulting in true. */
console.log("a > b: ", a > b); // true
console.log("a < b: ", a < b); // false
console.log("a >= b: ", a >= b); // true
console.log("a <= b: ", a <= b); // false

// Logical Operators
let x = true;
let y = false;
console.log("x && y: ", x && y); // Logical AND (false) 
console.log("x || y: ", x || y); // Logical OR (true)
console.log("!x: ", !x); // Logical NOT (false)
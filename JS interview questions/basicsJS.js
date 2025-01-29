// Reverse string

const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("Hello World")); // "dlroW olleH"

// Even numbers

const evenNumber = (n) => n%2===0;

console.log(evenNumber(1)); // false


// Find a factorial number

function factorial(n) {
    if(n==1 || n==0) return 1;
    else {
        return n * factorial(n-1);
    }
}

console.log("Factorial Number", factorial(5)); // 120

// Primse numbers

function primeNumber(n) {
    if(n<=1) return false;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if(n%i===0) {
            return false;
        }
    }
    return true;
}


console.log("Prime Number", primeNumber(7)); // true


// Find the largest number from the nested array

function nestedArray(nestedArray) {
    let largest = nestedArray[0][0];
    for(let arr of nestedArray) {
        for(let num of arr) {
            if(num > largest) {
                largest = num;
            }
        }
    }
    return largest;
}

console.log("Largest Number", nestedArray([[1,2,3], [4,5,10], [7,8,9]])); // 10
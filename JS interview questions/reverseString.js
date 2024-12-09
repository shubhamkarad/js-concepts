//Without built-in methods

const reverseString  = (str) => {
    if(str.lenght === 0) return false;
    let reversed = "";
    for(let i = str.length -1; i >=0; i--) {
        reversed+=str[i];
    }
    return reversed;
}

console.log(reverseString("Hello World")); // Output: dlroW olleH

// with built in method

const rev = "Using vuilt-in method";

console.log(rev.split("").reverse().join("")); // Output: egnirtuM gnidnuoC
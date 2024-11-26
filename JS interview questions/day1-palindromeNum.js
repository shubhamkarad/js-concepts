//Palindrome number 151 === 151

function Palindrome (x) {
    if(x<0) return false;
    
    const original = x.toString();
    const reversed = original.split('').reverse().join('');
     if(original === reversed) {
        console.log("Palindrome Number", reversed);
     }
     else {
        console.log("Not a Palidrome Number");
     }

}

Palindrome(212);

// Time complexity - O(n)
// Space complexity - O(n)
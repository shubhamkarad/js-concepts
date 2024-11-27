//Palindrome number 151 === 151

function Palindrome (x) {
    if(x<0) return false;
    
    // const original = x.toString();
    return x === +x.toString().split('').reverse().join('');
    //  if(original === reversed) {
    //     console.log("Palindrome Number", reversed);
    //  }
    //  else {
    //     console.log("Not a Palidrome Number");
    //  }

}

const res = Palindrome(121);
console.log(res);

// Time complexity - O(n)
// Space complexity - O(n)
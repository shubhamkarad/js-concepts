// anagram => aagmnr
// nagaram => aagmnr


const isAnagram1 = function (s,t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s==t ? true : false
}
const res1 = (isAnagram1("abcs", "abcc"));
console.log(res1, "res1");

//Optimised away
const isAnagram = function (s,t) {
    if(s.length !== t.length) return false;

    let obj1 = {};
    let obj2 = {};

    for(let i=0; i<s.lgnth; i++ ) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[s[i]] = (obj2[s[i]] || 0) + 1;
    }
    for(const key in obj1) {
        if(obj1[key] !== obj2[key]) return false;
    }
    return true;
}

const res = (isAnagram("anagram", "nagaram"));
console.log(res);
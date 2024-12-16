// Using reduce method

let arr = ["Hello", "Shubham", "Bye", "Shubham", "Hello"];

const countWord = (arr) => {
  let result = arr.reduce((allNames, name) => {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});
  return result;
};

console.log("Count", countWord(arr));

// using an Object method

const usingObjectMethod = (arr) => {
  let count = {};

  arr.forEach((name) => {
    if (count[name]) {
      count[name]++;
    } else {
      count[name] = 1;
    }
  });
  return count;
};

console.log("Cout using object method", usingObjectMethod(arr));

// input = [1,2,3,3,4,4,5] output: 5 count of the unique array.

const removeDuplicate = (n) => {
  let i = 0;
  for (let j = 1; j < n.length; j++) {
    if (n[i] !== n[j]) {
      i++;
      n[i] = n[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicate([1, 2, 3, 3, 4, 4, 5]));

// THere are different types of algorithm used to sort or remove the duplicated.

// Using Set

const num = [1, 4, 2, 5, 6, 7, 3, 2];

console.log([...new Set(num)].sort((a, b) => b - a));

// Using filter method

console.log(num.filter((item, index) => num.indexOf(item) === index).sort());

// Using for loop

const uniqueArray = [];
const seen = {};

for (let item of num) {
  if (!seen[item]) {
    uniqueArray.push(item);
    seen[item] = true;
  }
}

console.log(uniqueArray.sort());

// Aspect	           for...in	                                   for...of
// Iterates over	 Keys (object properties or array indexes)	Values of an iterable
// Usable with	     Objects, Arrays	                        Arrays, Strings, Maps, Sets, etc.
// Use case	     Enumerating object properties	            Iterating through values
// Example Output	 Index or key (0, 1, 2, ...)	            Value (a, b, c, ...)
// Recommended for	 Objects	                                 Arrays and iterables

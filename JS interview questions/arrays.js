// Problems based on the Arrays

// Unique arrays

const arr = [1,2,3,3,5,5,6];

const uniqueArrays = [... new Set(arr)];

console.log(uniqueArrays); // [1,2,3,5,6]

// Can you write a function in JavaScript to get the current date in the format “YYYY-MM-DD”?

const currentDate = () => new Date().toISOString().split('T')[0];
console.log(currentDate());

// Can you write a function in JavaScript to calculate the cumulative sum of an array?

const cumulativeSum = arr => arr.reduce((acc, num) => [...acc, acc.length ? acc[acc.length - 1] + num : num], []);

console.log(cumulativeSum([10, 15, 20, 25, 30]));

// Can you write a function in JavaScript to split an array into chunks of a specified size?

const chunkArray1 = (arr, size) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

console.log(chunkArray1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));


const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// Can you write a function in JavaScript to convert a string containing hyphens and underscores to camel case?
const toCamelCase = str => str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
console.log(toCamelCase("abc_def-lmnop"));
// ex. arr = [2,3,4,5] output: 4

// const secondLargestNumber = (arr) => {
//   // time complecity o(nlogn)
//   const uniqueArr = Array.from(new Set(arr));
//   uniqueArr.sort((a, b) => {
//     return b - a;
//   });
//   console.log(uniqueArr);
//   if (uniqueArr.length >= 2) {
//     return uniqueArr[1];
//   } else {
//     return -1;
//   }
// };

// const res = secondLargestNumber([1, 2, 4, 4, 6]);
// console.log(res);

//Optmised approach

const secLargestNum = (arr) => {
  // time complexity: o(n)  space complexity: o(1)
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};
console.log(secLargestNum([1, 2, 4, 6, 5]));

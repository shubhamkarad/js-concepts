// Const arr = [1,2,3,5,6]; output: 4

const missingNumber = (arr, n) => {
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return total - sum;
};

console.log("Missing number is: ", missingNumber([1, 2, 3, 5, 6, 7, 4], 8));

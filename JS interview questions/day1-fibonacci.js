//fibonacci series
// 0,1,1,2,3,5...

const fibonacci = (n) => {
    const arr=[0, 1];
    for(let i=2;i<=n;i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    // console.log(arr);
    return arr;
}

const res = fibonacci(10);
console.log(res);


//using Recursion method

const fiboRecursion = (n) => {
    return  n<=1 ? n : fiboRecursion(n-1) + fiboRecursion(n-2); 
}
const res1 = fiboRecursion(3);
console.log(res1, "res1");
// Finding Two Numbers with a Specific Sum

// Let's say you have a sorted array and you want to find two numbers that add up to a specific target sum. The two-pointer approach can solve this problem efficiently.

// Problem
// Given a sorted array arr and a target sum target, find two numbers in arr that add up to target.
// If such a pair exists, return their indices; otherwise, return -1.

function findTwoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        const sum = arr[left] + arr[right];

        if(sum === target) {
            return [left, right];
        }
        else if (sum < left) {
            left ++;
        }
        else {
            right --;
        }

    }
    return -1;
}

// Example 

const arr = [1,2,3,4,5,6,7,8,9];
const target = 10;
console.log(findTwoSum(arr, target));
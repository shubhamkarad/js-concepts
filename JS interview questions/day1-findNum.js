// Two sum 
// Given an array of integers nums & integer target, return the indices of the two numbers such that add up to the target.

// Input: nums = [2,7,11,15], target = 9
// Output : [0,1]


const twoSums = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) return [i, j] 
        }
    }
}

const res = twoSums([3,2,7,11], 9);
console.log(res);
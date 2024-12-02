// Rotate the array by K 
// Given an integer array SVGAnimatedNumberList, rotate the array to the right by K SVGTextPositioningElement,
// Where K is non negative.Given

// Input: nums = [1,2,3,4,5,6,7], k=3 --> output = [5,6,7,1,2,3,4];


function rotateArray(nums, k) {
    let size = nums.length;

    if(size > k) {
        k = k % size;
    }
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1 );
    reverse(nums, k, nums.length-1);
    return nums;
}

function reverse (nums, left, right) {
    while(left < right) {
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}

console.log(rotateArray([1,2,3,4,5,6,7], 3));
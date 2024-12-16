// Bubble sort: 
// Start at the beginning of the list.
// Compare the first two elements.
// If the first element is greater than the second, swap them.
// Move to the next pair of elements and repeat the comparison and swap if necessary.
// Continue this process until the end of the list is reached.
// Repeat steps 1-5 until the list is fully sorted.

let arr1 = [20,12,30,10, 9, 5,40];

const bubbleSort = (arr) => {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for(let i = 0; i < n-1; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
        n--;   
    } while (swapped);
    return arr;
}

console.log("sorted Array", bubbleSort(arr1));
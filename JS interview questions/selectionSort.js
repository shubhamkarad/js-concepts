// Selection sort

// Start with an empty sorted region and an unsorted region containing the entire list.
// Find the smallest element in the unsorted region.
// Swap the smallest element with the first element of the unsorted region.
// Move the boundary between the sorted and unsorted regions one element to the right.
// Repeat steps 2-4 until the entire list is sorted.

// Selection sort has a space complexity of O(1).
// Time complexity is O(n^2) in all the cases (Worst, best and average)

let arr = [20, 10, 5, 25, 30, 40];

const selectionSort = (arr) => {
    let n = arr.length;
    for(let i =0; i < n-1; i++) {
        // Find the minimum element in the unsorted region
        let minIndex = i;
        for(let j = i +1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted region
        if(minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr
}

console.log(selectionSort(arr));
// Start with the first element as the sorted region.
// Take the next element from the unsorted region.
// Compare the taken element with the elements in the sorted region from right to left.
// Shift elements in the sorted region to the right to make space for the taken element if necessary.
// Insert the taken element into its correct position in the sorted region.
// Repeat steps 2-5 until all elements are sorted.

// Time Complexity: Insertion Sort has a time complexity of O(n2) in the worst and average cases, where n is the number of elements in the list. This happens when the elements are in reverse order. However, it performs well with nearly sorted data, achieving a best-case time complexity of O(n).
    
//     Space Complexity: Insertion Sort has a space complexity of O(1), meaning it sorts the list in place and requires only a constant amount of additional memory.
    
//     Insertion Sort is efficient for small datasets and is adaptive, meaning it is efficient for data sets that are already substantially sorted. Its simplicity and ease of implementation make it a good choice for situations where these factors are more critical than performance on large datasets.


function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage
let array = [12, 11, 13, 5, 6];
console.log("Sorted array:", insertionSort(array));
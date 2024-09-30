function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two parts from the middle
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Sort by concatenating two subarrays
    return merge(left, right);
}

function merge(left, right) {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Sorting by comparing elements in both arrays
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements
    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Array to be sorted
let numbers = [16, 21, 11, 8, 12, 22];

let sortedNumbers = mergeSort(numbers);

console.log(sortedNumbers);  
// Output: [8, 11, 12, 16, 21, 22]
// Big-O: O(n log n)

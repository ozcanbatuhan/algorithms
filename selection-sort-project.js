function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}


let numbers = [22, 27, 16, 2, 18, 6];


let sortedNumbers = insertionSort(numbers);

console.log(sortedNumbers); 

//output: [2, 6, 16, 18, 22, 27]
//Big-O notion: O(n²)
//18 element: Worst case


/*[7,3,5,8,2,9,4,15,6] selection sort ilk 4 adımı:
Adım 1: [2, 3, 5, 8, 7, 9, 4, 15, 6]
Adım 2: [2, 3, 5, 8, 7, 9, 4, 15, 6]
Adım 3: [2, 3, 4, 8, 7, 9, 5, 15, 6]
Adım 4: [2, 3, 4, 5, 7, 9, 8, 15, 6]*/



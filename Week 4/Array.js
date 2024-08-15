// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Dynamic array, Homogeneous array

// In Java
// int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}; // Homogeneour array
// int[] array1 = new int[10];  // Static/Fixed size array

// In Java you can use collections package to create dynamic arrays
// Integer[] array = new ArrayList<Integer>();

// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c', 'd', 'e']; // Heterogeneous array

array2[2]// 3 // O(1)


// Traversing through an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0 ; i < array.length ;i++) {
    console.log(array[i]); // O(n)
}

// Insertion in an array
array.splice(6, 0, 6.5); // O(n)


// Delete in an array
array.splice(6, 1); // O(n)


// Searching in an array
// Search for 5

const searchedElement = array.find((element) => element === 5); // O(n)


// Update in an array
array[6] = 6.5; // O(1)


// Why shift is O(N) ?
// [2,3,4,5];
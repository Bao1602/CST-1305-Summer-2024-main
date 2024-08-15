
// [10, 20, 5, 2, 11, 0, 1, 15];

// [10, 20, 5, 2] X [11, 0, 1, 15]

// [10, 20] X [5, 2]      [11, 0] X [1, 15]

// [10] [20] X [5] [2]      [11] [0] X [1] [15] 

// AFTER DIVIDING 

// [10, 20] X [2, 5]      [0, 11] X [1, 15]

// [2, 5, 10, 20] X [0, 1, 11, 15]

// [0, 1, 2, 5, 10, 11, 15, 20]; // SORTED ARRAY


// Merge Sort

function mergeSort(array) {
    // BASE CASE
    if (array.length <= 1) {
        return array;
    }


    // DIVIDE THE ARRAY INTO TWO HALVES
    const mid = Math.floor(array.length / 2);

    // LEFT HALF
    const leftHalf = array.slice(0, mid);

    // RIGHT HALF
    const rightHalf = array.slice(mid);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf))
}

function merge(leftHalf, rightHalf) {
    let sortedArray = [];
    while(leftHalf.length && rightHalf.length) {
        if (leftHalf[0] < righHalf[0]) {
            sortedArray.push(leftHalf.shift());
        } else {
            sortedArray.push(rightHalf.shift());
        }
    }

    return [...sortedArray, ...leftHalf, ...rightHalf] // [10, 20]
}




// [10, 20, 5, 2, 11, 0, 1, 15]; , PIVOT = 10

// [ 5, 2, 0, 1 ] 10 [ 20, 11 , 15]

// [0, 1, 2 , 5]  10   [ 11, 15, 20]

// [ 2, 0, 1 ] 5 [ ]       [11, 15]   20 []

// [ 2, 0, 1 ]             []  11 [15]
 
// [ 0, 1 ] 2 [ ]

// [ 0, 1 ]

// [ 0 ] 1 [ ]


// [5, 1] // PIVOT - 10, [1] 5 []
function quickSort(array) {
    // BASE CASE

    if (array.length <= 1) {
        return array;
    }

    // PIVOT

    const pivot = array[0];
    const arrayToLeftOfPivot = []; // [5, 1]
    const arrayToRightOfPivot = []; // [15]

    for (let i = 1; i < array.length;i++ ) {
        if (array[i] < pivot) {
            arrayToLeftOfPivot.push(array[i]);
        } else {
            arrayToRightOfPivot.push(array[i]);
        }
    }

    return [...quickSort(arrayToLeftOfPivot), pivot, ...quickSort(arrayToRightOfPivot)]
    
}

// [5, 1] 10 [15]
// [1] 5 []

[1, 5, 10, 15]
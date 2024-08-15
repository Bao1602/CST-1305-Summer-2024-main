// ** BUBBLE SORT! **

let array = [10, 2, 11, 3, 4, 0]; // n = 6, n - 1 = 5

// FIRST PHASE, i = 0, j = 0
// [10, 2, 11, 3, 4, 0]
// [2, 10, 11, 3, 4, 0] i = 0, j = 1, j + 1
// [2, 10, 3, 11, 4, 0]
// [2, 10, 3, 4, 11, 0]
// [2, 10, 3, 4, 0, 11]

// SECOND PHASE
// [2, 10, 3, 4, 0, 11]
// [2, 3, 10, 4, 0, 11]
// [2, 3, 4, 10, 0, 11]
// [2, 3, 4, 0, 10, 11]

// THIRD PHASE
// [2, 3, 4, 0, 10, 11]
// [2, 3, 0, 4, 10, 11]


// FOURTH PHASE
// [2, 3, 0, 4, 10, 11]
// [2, 0, 3, 4, 10, 11]

// FIFTH PHASE
// [2, 0, 3, 4, 10, 11]
// [0, 2, 3, 4, 10, 11]

function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j + 1] < array[j] ) {
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

// How would you swap two variables without a 3rd temp variable ?

//** SELECTION SORT **/

// [10, 2, 11, 3, 4, 0]
// min = array[i], 10

// min > array[j]
  // swap
// [2, 10,  11, 3, 4, 0]

// min = 2
    // swap
// [0, 10,  11, 3, 4, 2]
  // min = 0



function selectionSort(array) {
    let n = array.length;

    for (let i = 0; i < n -1; i++) {
        let min = i;

        for (let j =  i + 1; j < n ;j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    return array;
}
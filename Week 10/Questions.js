// Given an array check if it has duplicates or not

let array = [2,4,1,2,4];

let sorted = [1,2,2,4,4];
function duplicatesUsingSet(array) {
    const values = new Set();

     for (let i = 0 ; i < array.length; i++) {
        values.add(array[i]);
    }

    if (values.size() === array.length) {
        return true;
    }

    return false;
}

let maxDuplicateArray = [2,4,1,2,4, 2];

// Given an array find the number which is repeated maximum times.
// Try it solve it by yourself

//. Find the kth largest number in the array.

function findKthLargest(array, k) {
    if (k === 1) {
        // Return the max of the array
        return Math.max(...array);
    }

    const maxVal = Math.max(...array);
    const indexValue = array.indexOf(maxVal);
    array.splice(indexValue, 1);

    return findKthLargest(array, k - 1)
}

// [2,4,1,2,4, 2];

// [1, 2, 2, 2, 4, 4]

function findKthLargestUsingSort(array, k) {
    array.sort((a , b ) => a - b);
    return array[k - 1];
}

// You have an array = [1, 3,2,5,6,2], [1,3,5,2,6]


// Q5. We are given an array of 0's and 1's , revamp the array in such a fashion that all 0's are on left and all 1's are on right.

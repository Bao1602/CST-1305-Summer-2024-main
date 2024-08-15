// Linear Search

let array = [10, 20, 50, 30, 11, 22];

function linearSearch(array, target) {
    for (let i = 0 ; i < array.length; i++) {
        if (array[i] === target) {
            return true;
        }
    }

    return false;
}

console.log(linearSearch(array, 111));


// Binary Search
let sortedArray = [10, 12, 14, 16, 18, 20];

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right ) / 2);

        if (array[middle] === target) {
            return true;
        } else if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return false;
}


function binarySearchUsingRecursion(array, target,  left, right) {
    if ( left > right) {
        return false;
    }

    const middle = Math.floor((left + right ) / 2);
    if (array[middle] === target) {
        return true;
    } else if (array[middle] < target) {
        return binarySearch(array, target, middle + 1, right)
    } else {
        right = middle - 1;
        return binarySearch(array, target, left, middle - 1)
    }
}

console.log(binarySearch(sortedArray, 12222));
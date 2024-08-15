// Finding the missing number

let array = [5, 1, 2, 3]; // 4

// 2 solutions.

// 1 solution using sorting.

// O(nlogn)
function findMissingNumberWithSort(array) {
    // Sort the array
    array.sort((a, b) => a - b); // [1, 2, 3, 5]

    for (let i = 0 ; i < array.length ; i++ ) {
        if (array[i] !== i + 1) {
            return i + 1;
        }
    }
}
// 1, 2, ,3 ,4 -> n (n * 1) / 2
// O(n)
function findMissingNumberUsingSum (array, n) {
    const expectedSum = n * (n + 1) / 2; // 11 + 4 = 15

    const recievedsum = array.reduce((acc, current) => acc + current, 0); // [1, 2, 3, 5]  11

    return expectedSum - recievedsum;
}

console.log(findMissingNumberUsingSum(array, 5));


// 2Sum problem
// [1, 4, 5,11, 20], expectedSum = 9, [4,11]

// Brute Force Based Solution

let twoSumArray = [1, 4, 5,11, 20];
// O(n * 2)
function twoSumUsingBruteForce(array, target) {
    for (let i = 0 ; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [array[i], array[j]]
            }
        }
    }

    return [];
}

// O(n)
// [1, 4, 5,11, 20]; , 9

// {
    // 1: 8,
    // 4: 1
// }

// 4
function twoSum(array, target) {
    let map = new Map();

    for (let i = 0 ; i < array.length;i++) {
        const complement = target - array[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        } else {
            map.set(array[i], i);
        }
    }
}

console.log(twoSumUsingBruteForce(twoSumArray, 9));


// Find the permutation of all the possible string value - ABC
// ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']

// "ABC" , { current: "", remaining: "ABC"}, firstChar = "A", remaining = "BC"
// Iteration Process

[
    { current: "A", remaining: "BC"},
    { current: "B", remaining: "AC"},
    { current: "C", remaing: "AB"}
]


// Time Complexity: O(n * n!);
function permute(str){ 
    const result = [];
    const stack = [{ current: "", remaining: str}]; // FILO

    while (stack.length > 0) {
        const { current , remaining } = stack.pop(); // "", "ABC"

        if (remaining.length === 0) {
            result.push(current);
        } else {
            for (let i = 0 ; i  < remaining.length; i++) {
                const firstCharacter = remaining[i]; // "B"
                const remainingCharacters = remaining.slice(0, i) + remaining.slice(i + 1); // "BC";
                stack.push({ current: current + firstCharacter, remaining: remainingCharacters})
            }
        }
    }

    return results;
}

permute('ABC');
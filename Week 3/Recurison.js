

// Q1// Fbbonacci Series
// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610

// 5
function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// fibonacci(6) --> fibonacci(5) + fibonacci(4)

// fibonacci(5) --> fibonacci(4) + fibonacci(3)

// fibonacci(4) --> fibonacci(3) + fibonacci(2)

console.log(fibonacci(6));



// Q2 // Sum of numbers in array
// [1, 2, 3, 4, 5] --> 15

// [1, 2, 3, 4, 5]

// 1 + sum([2, 3, 4, 5]) (1 + 14 = 15)
        // 2 + sum([3, 4, 5]) (2 + 12 = 14)
            // 3 + sum([4, 5]) (3 + 9 = 12)
                // 4 + sum([5]) (4 + 5 = 9)
                    // 5 + sum([]) = 0 // 5


// Q3 POWER OF A NUMBER

// 2 ^ 3 = 2 * 2 * 2 = 8

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    return base * power(base, exponent - 1);
}


// power(2, 3) --> 8
    // --> 2 * power(2, 2) -->  2 * 4 = 8
                // --> 2 * power(2, 1) --> 2 * 2 = 4
                        //    --> 2 * power(2, 0) --> 2 * 1 = 2
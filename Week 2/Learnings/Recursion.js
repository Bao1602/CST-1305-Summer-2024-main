// Recursion

function greeting() {

    if (baseCase) {
        // stopCallingGreeting();
    }
    greeting();
}


// Factorial

// 5! - 5 * 4 * 3 * 2 * 1 - 120

// 10! - 10 * 9 * 8 * 7 ... * 1

function factorial(num) {

    if (num === 1 || n === 0) {
        // break
        return 1;
    }
   
    return num * factorial(num - 1);
}

// factorial(5)

// 5 * factorial(4) 5 * 24 = 120 // CYCLE 1 
// 4 * factorial(3) 4 * 6  = 24// CYCLE 2
// 3 * factorial(2) 3 * 2  = 6// CYCLE 3
// 2 * factorial(1) - 2 * 1  // CYCLE 4

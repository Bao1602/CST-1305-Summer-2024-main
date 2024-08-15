// Valid Parenthesis Problem
// Given a string containing just the characters (, ), {, }, [ and ], determine if the input string is valid. An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// [{()}]
function isValidParenthesis(str) {
    const stack = [];

    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (const char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            const poppedValue = stack.pop();
            if (char !== map[poppedValue]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
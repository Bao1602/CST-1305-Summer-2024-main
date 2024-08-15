// Given an integer x, return true if x is a  palindrome , and false otherwise.
// https://leetcode.com/problems/palindrome-number/description/

var isPalindrome = function(x) {

    if (x < 0) {
        return false;
    }

    const str = x.toString(); // 121 --> '1221'
    let leftIndex = 0;
    let rightIndex = str.length - 1;

    while (rightIndex > leftIndex) {
        if (str[rightIndex] !== str[leftIndex]) {
            return false;
        }

        leftIndex++;
        rightIndex--;
    }

    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();

    let cleaned = "";

    for (let char of s) {


        if (
            (char >= 'a' && char <= 'z') ||
            (char >= '0' && char <= '9')
        ) {
            cleaned += char;
        }
    }

    let reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
    
};
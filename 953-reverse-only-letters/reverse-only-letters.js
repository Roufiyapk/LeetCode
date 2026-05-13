/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let letters = s.match(/[a-zA-Z]/g) || [];

    letters.reverse();

    let result = "";

    for (let ch of s) {

        if (/[a-zA-Z]/.test(ch)) {

            result += letters.shift();

        } else {

            result += ch;
        }
    }

    return result;
       

    
};
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    let reversed = s.join("").split("").reverse().join("");

    for (let i = 0; i < s.length; i++) {
        s[i] = reversed[i];
    }
    
};
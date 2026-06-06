/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {

    let idx=word.indexOf(ch)


    if(idx===-1){
        return word
    }

    let first=word.slice(0,idx+ch.length).split("").reverse().join("")
    let last=word.slice(idx+ch.length)

    return first+last
};
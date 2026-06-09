/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {


    let result=[]


    for(i=0;i<=words.length-1;i++){
        if(words[i].includes(x)){
            result.push(i)
        }
    }
    return result
};
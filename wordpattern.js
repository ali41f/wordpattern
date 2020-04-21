/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let firstLetter = str.split(" ");
    let patternArr = pattern.split('')
    if (firstLetter.length != patternArr.length) return false
    let returnValue = true
    let keyValue = {}
    for (let i = 0; i < firstLetter.length; i++) {
        keyValue[patternArr[i]] = firstLetter[i]
    }
    let arrayValues = Object.values(keyValue)
    if ((new Set(arrayValues)).size !== arrayValues.length) {
        returnValue = false
        return false
    }
    console.log(arrayValues)
    console.log(keyValue)
    for (let i = 0; i < firstLetter.length; i++) {
        if (firstLetter[i] != keyValue[patternArr[i]]) returnValue = false
    }
    return returnValue
};
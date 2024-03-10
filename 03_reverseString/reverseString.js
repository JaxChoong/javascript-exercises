const reverseString = function(string) {
    let strLen = string.length
    let strReversed =""
    for (let i = strLen - 1; i>=0;i--){
        strReversed += string[i]
    }
    return strReversed
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
    string = string.toLowerCase().split('').filter((character) => alphanumerical.includes(character)).join('');
    let strLen = string.length
    let strReversed =""
    
    for (let i = strLen - 1; i>=0;i--){
        strReversed += string[i]
    }
    if (strReversed.split('').join('') === string){
        return true
    }
    else{
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;

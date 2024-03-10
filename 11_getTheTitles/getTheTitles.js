const getTheTitles = function(array) {
    let titleArray = []
    arrayLen = array.length
    for ( let i = 0; i < arrayLen ; i++){
        titleArray.push(array[i]['title'])
    }
    return titleArray
};

// Do not edit below this line
module.exports = getTheTitles;

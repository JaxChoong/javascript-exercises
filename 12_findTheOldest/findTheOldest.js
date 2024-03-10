const findTheOldest = function(array) {
    let oldestAge = 0
    let oldestName =""
    let arrayLen = array.length
    for (let i = 0; i< arrayLen ; i++){
        currentName = array[i]['name'];
        deathYear = array[i]['yearOfDeath'];
        birthYear = array[i]['yearOfBirth'];
        
        currentAge =  deathYear - birthYear ;

        if ( currentAge > oldestAge) {
            oldestAge = currentAge
            oldestName = currentName

        }
    }
    return oldestName
};

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function(array) {
    return array.reduce(findOldestPerson)    // reduce() uses a function to cycle through array.
};

function getAge(deathYear, birthYear){
    if (!deathYear) {
        deathYear = new Date().getFullYear();
      }
    return deathYear - birthYear
}
function findOldestPerson(oldestPerson,currentPerson){     //for reduce(), first argument is the value u want,
                                                           // second value is the current index of the array.
    let oldestAge = getAge(oldestPerson.yearOfDeath, oldestPerson.yearOfBirth)  
    let currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth)
    if ( currentAge > oldestAge) {
        return currentPerson      // replaces oldestPerson with value of currentPerson
    }
    else{
        return oldestPerson
    }

}

// Do not edit below this line
module.exports = findTheOldest;

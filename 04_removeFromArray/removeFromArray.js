const removeFromArray = function(array, ...args) {
    // ...args   allows however many arguments after the defined ones
    let filteredArray = [];
    array.forEach(i =>{
        if (!args.includes(i)){          // if i is not in arguments provided
            filteredArray.push(i)
        }
    }
        )
        return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;

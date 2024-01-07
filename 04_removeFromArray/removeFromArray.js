const removeFromArray = function() {
    const argumentsArray = Array.from(arguments)

    let input = argumentsArray.shift()
    const removeList = argumentsArray// at this point it the list of vaulus to be removed
    let removeItem = undefined

    for(let i of removeList){ 
        removeItem = i
        console.log(removeItem)
        for(let j in input)if(input[j] === removeItem) input.splice(j,1)    
        }
        return input
};

// Do not edit below this line
module.exports = removeFromArray;

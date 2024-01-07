const repeatString = function(str , numOfiterations) {
    if(numOfiterations < 0) return "ERROR"
    let out = ""
    for(let i = 0; i < numOfiterations; i++)out += str
    return out
    
};

// Do not edit below this line
module.exports = repeatString;

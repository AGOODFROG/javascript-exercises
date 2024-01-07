const reverseString = function(text) {
    const textList = text.split("")// turns string in to arrray, 
   let outList = []
    for( let i of textList){
        outList.unshift(i)
    }
    const output = outList.join("")
    return output
};

// Do not edit below this line
module.exports = reverseString;

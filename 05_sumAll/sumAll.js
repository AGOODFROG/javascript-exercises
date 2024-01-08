const sumAll = function(lowNumber, highNumber) {//(1,4) note to selfreturns the sum of 1 + 2 + 3 + 4 which is 10
    if( lowNumber > highNumber){ //  makes sure lowNumber < highNumber
        let temp1 = lowNumber
        let temp2 = highNumber
        highNumber = temp1
        lowNumber = temp2
    }
    if( lowNumber < 0) return "ERROR"
    if(typeof lowNumber !== "number" || typeof highNumber !== "number") return "ERROR"
    let output = 0
    for(let i = lowNumber-1; i <= highNumber; i++) output += i
    return output
    
   
};

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function(maxNumber) {
    maxNumber = Number(maxNumber)
    if(maxNumber === 0) return 0 // IDK some proof most be some where
    if(maxNumber < 0) return "OOPS"
    const fibonacciNumbers = [1, 1]// the base to avoid indexing errors
    const oneBefore = 1
    const twoBefor = 2
    for(let i = 2; i < maxNumber; i++){
        fibonacciNumbers.push(
            fibonacciNumbers[i-oneBefore] + 
            fibonacciNumbers[i-twoBefor] 
            )    
    }
    return fibonacciNumbers[fibonacciNumbers.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;

const findTheOldest = function(input) {
    let prevAge = 0
    let cerentAge = 0// IN THE FOR LOOP
    let prevObj = input[0]// get it ready to be looped over

    for(let i of input){
        if( i.yearOfDeath === undefined){
            const d = new Date()
            let year = d.getFullYear()
            cerentAge = year - i.yearOfBirth
        } else cerentAge = i.yearOfDeath - i.yearOfBirth
        
        if (cerentAge > prevAge){
            prevAge = cerentAge
            prevObj = i
        } 
    }
    return prevObj
    

};

// Do not edit below this line
module.exports = findTheOldest;

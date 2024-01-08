const leapYears = function(year) {
    /*
      if div by 4
        if div by 100 and 400
            true
        else 
            false 

      if not div by 4
        retuern flase 
    
    */
   if( year % 4 === 0){
        if( year % 100 === 0 && year % 400 !== 0 ) return false
        return true    
   }else return false
};

// Do not edit below this line
module.exports = leapYears;

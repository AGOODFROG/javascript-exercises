const palindromes = function (input) {
    let text = input
    text = text.replace(/\W/g, '')
    text = text.toLowerCase()
    let reversedText =""
    for(let i = text.length-1;i >= 0; i--){
        reversedText += text[i]
        console.log(reversedText)
    }
    return reversedText === text
    

};

// Do not edit below this line
module.exports = palindromes;

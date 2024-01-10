const getTheTitles = function(bookList) {
    let output = []
    for(let i of bookList) output.push(i.title)
    return output
};

// Do not edit below this line
module.exports = getTheTitles;

const repeatString = function(word, num) {
    if (num < 0) return "ERROR";

    let string = "";
    
    let i = 0;
    while (i < num) {
        string += word;
        i++;
    }
    
    return string;
};

console.log(repeatString("Hey", 3));

// Do not edit below this line
module.exports = repeatString;

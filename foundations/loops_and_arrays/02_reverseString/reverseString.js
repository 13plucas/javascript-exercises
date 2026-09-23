const reverseString = function(str) {
    let letters = [...str];
    letters.reverse();
    return letters.join('');
};

console.log(reverseString("Hello"));

// Do not edit below this line
module.exports = reverseString;

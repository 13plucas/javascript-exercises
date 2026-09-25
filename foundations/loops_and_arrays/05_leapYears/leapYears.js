const leapYears = function(year) {
    const isDivisibleByFour = year % 4 === 0;
    const isDivisibleByOneHundred = year % 100 === 0;
    const isDivisibleByFourHundred = year % 400 === 0;

   if (isDivisibleByOneHundred && !isDivisibleByFourHundred || !isDivisibleByFour) {
    return (`${year} is not a leap year`);
   } else {
    return (`${year} is a leap year`);
   }
};

console.log(leapYears(34992));

console.log(leapYears(1900));

console.log(leapYears(1600));

console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;

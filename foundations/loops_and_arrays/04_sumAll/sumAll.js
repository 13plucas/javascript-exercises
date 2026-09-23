const sumAll = function(firstNum, secondNum) {
    let arr = [];

    for (let i = firstNum; i <= secondNum; i++) {
        arr.push(i);
    }

    addAll = arr.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0);

    console.log(addAll);
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;

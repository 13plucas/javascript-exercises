const removeFromArray = function(arr, item) {

    function isNotItem(num) {
        return num !== item
    }

    let removed = arr.filter(isNotItem);
    console.log(removed);
};

removeFromArray([1, 2, 2, 4, 5], 2);

removeFromArray([5, 5, 2, 3, 3, 4, 3, 8, 2], 3);

// Do not edit below this line
module.exports = removeFromArray;

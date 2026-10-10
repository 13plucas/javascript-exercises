const fibonacci = function(num) {
    const sequence = [1, 1];
    const n = Number(num);

    if (n < 3 && n > 0) {
        return 1;
    } else if (n === 0) {
        return 0;
    } else if (n < 0) {
        return "OOPS";
    } else {
        for (let i = 1; i <= n; i++) {
            const currentValue = sequence[i];
            const addedValue = sequence[i - 1] + currentValue;
            sequence.push(addedValue);
        }
        return sequence[n - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;

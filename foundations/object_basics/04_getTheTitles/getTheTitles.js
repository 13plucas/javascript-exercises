const getTheTitles = function(array) {
    const bookTitles = [];

    for (let i = 0; i < array.length; i++) {
        const currentTitle = array[i].title;
        bookTitles.push(currentTitle);
    }
    
    return bookTitles;
};

// Alternative method from solution

// const getTheTitles = function (array) {
//   return array.map((book) => book.title);
// };

// Do not edit below this line
module.exports = getTheTitles;

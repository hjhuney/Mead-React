// regular function

const square = function (x) {
    return x * x;
};

console.log(square(8));

// arrrow function in ES6

const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(7));

// arrow function expression syntax

const squareArrow2 = (x) => x * x;

console.log(squareArrow(9));

// challenge - use arrow function 
// getFirstNames

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstName2 = (fullName) => fullName.split(' ')[0];


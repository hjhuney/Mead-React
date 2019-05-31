# JavaScript Notes

## Let vs Var vs Const

You can change the values of both 'var' and 'let', but you can't redefine a 'let'. For instance:

```
var nameVar = "Jim";
var nameVar = "Mike";
console.log(nameVar);

// result will be Mike

let nameLet = "Jen";
let nameLet = "Julie";
console.log(nameLet)

// this will generate an error message due to duplicate declaration
// you can change value of let like this: 

let nameLet = "Jen";
nameLet = "Julie";
console.log(nameLet)

// essentially, this helps prevent accidentally creating two variables with the same name
```

A 'const' can neither be redeclared nor reassigned. 


## Arrow Functions

Example of regular function vs arrow function below. 

```
// regular function

const square = function (x) {
    return x * x;
};

console.log(square(8));

// arrrow function in ES6

const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(7))
```

Arrow functions are anonymous. 

## Arrow Function Expression Syntax

With this, we do not need to use return statement. Example:

```
// arrow function expression syntax

const squareArrow2 = (x) => x * x;

console.log(squareArrow(9));
```

We can't use the expression syntax in every scenario. 

## Arrow Functions: Arguments and This

"This" typically does not work with an anonymous function. Example:

```
const user = {
    name: 'LeRoy', 
    cities: ['Toronto', 'Buffalo', 'Niagara Falls'], 
    
    // this.name is accessible here ...
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        
    // this.name not accessible here ...
    this.cities.forEach(function (city) {
        console.log(this.name);
    });
}
user.printPlacesLived();
        
```

However, this will work in an arrow function. 

## Map Method

Map (.map) similar to forEach (.forEach), except .map allows you to transform each item in an array, whereas forEach simply lets you do something to each item (e.g. print via console.log). 


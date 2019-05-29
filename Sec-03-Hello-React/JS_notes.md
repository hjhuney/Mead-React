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

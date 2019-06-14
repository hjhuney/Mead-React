# Table of Contents

Section 3: [Hello React](https://github.com/hjhuney/Mead-React/blob/master/Sec-03-Hello-React/readme.md#hello-react)<br>
Section 4: [React Components](https://github.com/hjhuney/Mead-React/blob/master/Sec-03-Hello-React/readme.md#sec-4-react-components)

# Section 3: Hello React

## Installation Notes on Node and Yarn

Can see Node version via the command prompt with:

```
node -v
```

"npm" stands for Node Package Manager. npm and Yarn aim to do the same job. To see npm version:

```
npm -v
```

Install Yarn

```
npm install -g yarn
```

To check Yarn version:

```
yarn --version
```

## Install React

Install React via CDN tag. 

```
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
<script src="/scripts/app.js"></script>
```

## Compile with Babel

Babel is a JavaScript compiler. Most common use for Babel is taking ES6 / ES7 JS code back to ES5. Babel is also used to compile JSX into regular JS. You can see how the code is translated with [this tool](https://babeljs.io/repl). 

[Babel Plugins](https://babeljs.io/docs/en/plugins)

## Install Babel Locally

We are going to install Babel, env, and react. 

```
npm i -g babel-cli@6.24.1
```
-g stands for global

To see babel help menu:

```
babel --help
```

Add react package via Yarn:

```
yarn add babel-preset-react@6.24.1
```

Or with npm

```
npm i babel-preset-react@6.24.1
```

Install env

```
npm i babel-preset-env@1.5.2
```

app.js in src folder contains our JSX. app.js in scripts folder contains babel transformations.

In order to use babel:

```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

* Path to our code (src/app.js). 
* Output file (--out-file=public/scripts/app.js). This will override the file. 
* Presets (--presets=env, react)
* Watch (--watch); watches our source app.js for changes; automatically create new scripts app.js file with changes

## JSX Formatting

We can only use one root element in JSX. For instance, this is invalid since it contains 2 root tags ("h1" and "p"). 

```
let template = <h1>Indecision App</h1> <p>This is some info!</p>;
```

This is valid, however, since both the "h1" and "p" are enclosed in a "div" tag:

```
let template = <div><h1>Indecision App</h1> <p>This is some info!</p></div>;
```

Can format differently, such as this:

```
let template = 
    <div>
    <h1>Indecision App</h1> 
    <p>This is some info!</p>
    </div>;
```

## JSX Expressions

Using dyanmic JSX expression with userName:

```
let userName = 'Walrus';

// create a new templete with JSX expression
let template2 = 
    <div>
    <h1>{userName}</h1> 
    <p>Age: 54</p>
    <p>Location: Alquberque, NM</p>
    </div>;
```

In order to render object you must use object properties. 

```
// user object

let user = {
    name: 'Walrus McConnell',
    age: 59, 
    location: 'Lubbock, TX'
};

// create template with object

let template3 = 
    <div>
    <h1>{user.name}</h1> 
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
    </div>;

let appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot);
```

## Conditional Rendering

Example:

```
let user = {
    name: 'Walrus McConnell',
    age: 59, 
    location: 'Lubbock, TX'
};


function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

let template3 = 
    <div>
    <h1>{user.name}</h1> 
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
    </div>;

let appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot);
```

## Running our App with Live-Server

In order to run app on live-server, we need to input:

```
live-server public
```

## Ternary Operators in JSX

Example

```
let template4 = 
    <div>
    <h1>{user.name ? user.name: 'Anonymous'}</h1> 
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
    </div>;
```

In example above, we render user.name if available. If not, we render "Anonymous"


## Logical && Operator

Example:

```
let template4 = 
    <div>
    <h1>{user.name ? user.name: 'Anonymous'}</h1> 
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>;
```

For user age, if user is over 18, we render user.age. If not, nothing is rendered. 


## HTML Attributes in JSX

Some attributes like "id" work exactly the same way. Others like "class" do not. "Class" is now "className" in JSX. 

```
const template5 = (
    <div>
    <h1>Count: {count}</h1>
    <button id="my-id" className="button">+1</button>
    </div>
);
```

This is because "class" is reserved in ES6. 

[React: Differences in Attributes](https://reactjs.org/docs/dom-elements.html)

## Arrays in JSX

JSX supports strings and numbers, but not objects. 

```
{
    [99, 98, 97, 'Mike Smith']
}
```

Using keys to avoid error message:

```
{
    [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
}
```

## Map Array

```
const numbers = [55, 101, 1000];

{
    numbers.map((number) => {
        return <p key={number}>Number: {number}</p>
    })
}
```

## Conditionally Disable a Button in JSX

We can conditionally disable a button with JSX. In the example below, we want to disable the button if the number of options is equal to 0. 

```
<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
```


# Sec 4: React Components

## Template Strings

In JSX, we can use template strings. Instead of using quote marks, we use backticks. We use $ and curly braces for part we want to run dynamically. 

```
return `Hi ${this.name}`;
```


## ES6 Classes

Example:

```
class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }
    getGreeting() {      
        // using a template string; use backticks rather than quotes
        return `Hi ${this.name}`;
    }
}

const me = new Person();

console.log(me.getGreeting());

const other = new Person("Butt Head");
console.log(other.getGreeting());
```





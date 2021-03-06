# Table of Contents

Section 3: [Hello React](https://github.com/hjhuney/Mead-React/blob/master/Sec-03-Hello-React/readme.md#hello-react)<br>
Section 4: [React Components](https://github.com/hjhuney/Mead-React/blob/master/Sec-03-Hello-React/readme.md#sec-4-react-components)

## Frequently Referenced Sections

Babel: [Launch](https://github.com/hjhuney/Mead-React/tree/master/Sec-03-Hello-React#run-babel)<br>
Live-Server: [Launch](https://github.com/hjhuney/Mead-React/tree/master/Sec-03-Hello-React#live-server)<br>

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

## Run Babel

In order to use babel:

```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

* Path to our code (src/app.js). 
* Output file (--out-file=public/scripts/app.js). This will override the file. 
* Presets (--presets=env, react)
* Watch (--watch); watches our source app.js for changes; automatically create new scripts app.js file with changes

## Live-Server

To launch live server:

```
live-server public
```

on directory. 

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

## ES6: Extending Classes

Example of extending a class to create a new class:

```
// extending the Person class
class Student extends Person {
    // override constructor for Person
    constructor(name, age, major) {
        // call parent constructor function
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    // override getDescription() from Person
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()) {
            description = description += `Their major is ${this.major}`;
        }

        return description;
    }
}
```

The keyword "super" allows us to essentially copy elements from the original class, so "super(name, age)" uses name and age from the Person class in the above example, while super.getDescription() uses the getDescription() method from the Person class.

Addtional example:

```
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` Are you visiting from ${this.homeLocation}?`;
        }
        else {
            greeting += ` I am visiting from Nowhere!`;
        }
        return greeting;
    }
}
```

## Creating a React Component

Example of using a React Component to create a Header:

```
class Header extends React.Component {
    render() {
        return <p>This is from Header</p>;
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
```

We simply use "<Header />" to re-use the React component, so if we did it 3 times, we'd get the header 3 times. 

In React, must use uppercase first letter for React components. We normally do by convention anyway, but React forces us to do this. 

More complete example:

```
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
        <Action />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
```

## Nesting Components

Example:

```
class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            'Some text!!!'
        );
    }
}
```

## Component Props

Allow our components to communicate with each other. 

this.props gives properties of a class

```
console.log(this.props);

// returns
// Object { title: "Test value" }
```

Can use this to call a title for instance:

```
class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header title="Test value" />
                <Action />
                <Options />
                <AddOption />
            </div>
            
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}
```

## Events and Methods

Example with "handleRemoveAll":

```
class Options extends React.Component {
    handleRemoveAll() {
        alert('remove all!');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
                
            </div>
        );
    }
}
```

## .trim()

.trim() removes spaces before and after text, but not inner spaces. For instance:

```
' Andrew Mead    '

// becomes

'Andrew Mead'

// with

' Andrew Mead    '.trim()
```

## Method Binding

Set 'this' binding in certain situations; we need to use the bind() method in JS. In .bind(), you can use 1st argument to set 'this' context. In the example below, we set the 'this' context in 'obj.getName.bind(obj)'

```
const obj = {
    name: 'Vikram', 
    getName() {
        return this.name;
    }
}

// this will generate error
// const getName = obj.getName.bind();

//this works
const getName = obj.getName.bind(obj);

console.log(getName());
```

Can also force the binding like this:

```
const obj = {
    name: 'Vikram', 
    getName() {
        return this.name;
    }
}

const getName = obj.getName.bind({name: 'Andrew'});

console.log(getName());
```

## Component State



"use strict";

console.log('App.js is running!');

// JSX - JavaScript XML

var appInfo = {
    title: "Merfin Melvin's Merfin' App!",
    subtitle: "Let's merf this hizny up, booooyyyzzzz!",
    options: ['One', 'Two']

    // let template = 
    //     <div>
    //     <h1>Indecision App</h1> 
    //     <p>This is some info!</p>
    //     <ol>
    //     <li>Item One</li>
    //     <li>Item One</li>
    //     </ol>
    //     </div>;

};var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        appInfo.title
    ),
    appInfo.subtitle && React.createElement(
        "p",
        null,
        appInfo.subtitle
    ),
    React.createElement(
        "p",
        null,
        appInfo.options.length > 0 ? "here are your options" : "no options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item One"
        )
    )
);

// user object

var user = {
    name: 'Walrus McConnell',
    age: 56,
    location: 'Lubbock, TX'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    } else {
        return undefined;
    }
}

// user variables

var userName = 'Merfin Melvin';
var userAge = 48;
var userLocation = "Albuquerque, NM";

// create a new templete with JSX expression
var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        userName.toUpperCase()
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        userAge
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        userLocation
    )
);

// create template with object

var template3 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

// ternary operator

var template4 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

"use strict";

console.log('App.js is running!');

// create an app object title / subtitle
// user title / subtitle in the template
// render template

// JSX - JavaScript XML

var appInfo = {
    title: "Merfin Melvin's Merfin' App!",
    subtitle: "Let's merf this hizny up, booooyyyzzzz!",
    userTitle: "Stuff"

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
    React.createElement(
        "p",
        null,
        appInfo.subtitle
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
    age: 59,
    location: 'Lubbock, TX'
};

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
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

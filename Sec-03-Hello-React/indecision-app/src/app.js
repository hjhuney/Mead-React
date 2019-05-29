console.log('App.js is running!');

// create an app object title / subtitle
// user title / subtitle in the template
// render template

// JSX - JavaScript XML

let appInfo = {
    title: "Merfin Melvin's Merfin' App!", 
    subtitle: "Let's merf this hizny up, booooyyyzzzz!", 
    userTitle: "Stuff"
}

// let template = 
//     <div>
//     <h1>Indecision App</h1> 
//     <p>This is some info!</p>
//     <ol>
//     <li>Item One</li>
//     <li>Item One</li>
//     </ol>
//     </div>;

let template = 
    <div>
    <h1>{appInfo.title}</h1> 
    <p>{appInfo.subtitle}</p>
    <ol>
    <li>Item One</li>
    <li>Item One</li>
    </ol>
    </div>;


// user object

let user = {
    name: 'Walrus McConnell',
    age: 59, 
    location: 'Lubbock, TX'
};

// user variables

let userName = 'Merfin Melvin';
let userAge = 48;
let userLocation = "Albuquerque, NM"

// create a new templete with JSX expression
let template2 = 
    <div>
    <h1>{userName.toUpperCase()}</h1> 
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
    </div>;

// create template with object

let template3 = 
    <div>
    <h1>{user.name}</h1> 
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
    </div>;

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
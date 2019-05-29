console.log('App.js is running!');


// JSX - JavaScript XML

let appInfo = {
    title: "Merfin Melvin's Merfin' App!", 
    subtitle: "Let's merf this hizny up, booooyyyzzzz!", 
    options: ['One', 'Two']
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
    {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
    <p>{appInfo.options.length > 0 ? "here are your options" : "no options"}</p>
    <ol>
    <li>Item One</li>
    <li>Item One</li>
    </ol>
    </div>;


// user object

let user = {
    name: 'Walrus McConnell',
    age: 56, 
    location: 'Lubbock, TX'
};


function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}

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
    {getLocation(user.location)}
    </div>;

// ternary operator

let template4 = 
    <div>
    <h1>{user.name ? user.name: 'Anonymous'}</h1> 
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>;

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
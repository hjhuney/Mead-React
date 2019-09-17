console.log("app is running!")

// JSX - Javascript XML


let app = {
    title: 'Indecision App', 
    subtitle: 'Put your life in the hands of a computer', 
    options: ['One', 'Two']
}

let template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options.length > 0) ? 'here are your options' : 'no options'}</p>
</div>
);

let user = {
    name: 'Andrew', 
    age: 26, 
    location: 'Philadelphia'
}

let userName = 'Mike';
let userAge = 27;
let userLocation = 'New York'; 

let getLocation = (location) => {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return 'Unknown';
    }
}

let templateTwo = (
    <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
</div>
)



let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

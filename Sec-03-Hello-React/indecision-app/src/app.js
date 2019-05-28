console.log('App.js is running!');

// JSX - JavaScript XML

let template = <p>This is JSX from app.js!</p>;
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
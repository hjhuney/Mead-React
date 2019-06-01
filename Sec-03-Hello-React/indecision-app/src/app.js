console.log('App.js is running!');


// JSX

const app = {
    title: "Merfin Melvin's Merfin' App!", 
    subtitle: "Let's merf this hizzy up, booooyyyzzzz!", 
    options: []
}


const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted:');

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

// create remove all button
const onRemoveAll = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById('app');


// challenge
const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "here are your options" : "no options"}</p>
        <p>{app.options.length}</p>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
        <li>Item One</li>
        <li>Item Two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
            
            
        </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();

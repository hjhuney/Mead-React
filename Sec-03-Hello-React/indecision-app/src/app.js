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

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

// create remove all button
const onRemoveAll = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];

const listNames = ['Item One', 'Item Two', 'Item Three'];


// challenge
const render = () => {
    const template = (
        <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "here are your options" : "no options"}</p>

        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

        <button onClick={onRemoveAll}>Remove All</button>

        {
            // numbers.map((number) => {
            //     return <p key={number}>Number: {number}</p>;
            // })
        }

        <ol>
        {
            app.options.map((option) => {
                return <li key={option}>{option}</li>;
            })
        }
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



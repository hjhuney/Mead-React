const obj = {
    name: 'Vikram', 
    getName(){
        return this.name;
    }
};

const getName = obj.getName.bind(obj);
console.log(getName());


// create indecision app component
class IndecisionApp extends React.Component {
    render() {

        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        const options = ['Thing One', 'Thing Two', 'Thing Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )

    }
}


// create Header React class
class Header extends React.Component {
    // React components must define render
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick(){
        alert('handlePick');

    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}


// options component
class Options extends React.Component {

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        alert('handleRemoveAll');
    }

    render(){
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>

                {
                    this.props.options.map((item) => <Option key={item} optionText={item} />)
                }

            </div>
        );
    }
}

// create options components
class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}


// addOption component'
class AddOption extends React.Component {
    handleAddOption(event){
        event.preventDefault();

        const option = event.target.elements.option.value.trim();

        if (option) {
            alert(option)
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" /> 
                    <button>Add Option</button>               
                </form>
            </div>
        )
    }
}



// render to DOM
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
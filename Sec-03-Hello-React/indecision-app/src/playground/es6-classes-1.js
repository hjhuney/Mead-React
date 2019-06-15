class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {      
        // using a template string; use backticks rather than quotes
        return `Hi ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

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


const me = new Person();

// console.log(me.getGreeting());
// console.log(me.getDescription());

const other = new Person("Butt Head", 15);
// console.log(other.getGreeting());
// console.log(other.getDescription());


const beavis = new Student("Beavis", 15, "Arson");
// console.log(beavis.getDescription());
// console.log(beavis.hasMajor());

const butthead = new Traveler("Butt Head", 40, "Lubbock");
console.log(butthead.getGreeting());

const beaver = new Traveler("Beavis", 24);
console.log(beaver.getGreeting());
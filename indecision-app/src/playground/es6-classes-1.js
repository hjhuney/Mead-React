class Person {
    // constructor function
    constructor(name = 'Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }

    // get greeting function
    getGreeting(){
        // return 'Hi, ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }

    // get description function
    getDescription(){
        return `${this.name} is ${this.age} years old!`;
    }

}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        // test whether major has a value input
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()){
            description += ` their major is ${this.major}.`;
        }

        return description;
    }
}


class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        // test whether major has a value input
        return !!this.homeLocation;
    }



    getGreeting(){
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()){
            greeting += ` He is visiting from ${this.homeLocation}.`;
        }
    
        return greeting;
    }

}


// create a new instance of class with "new" keyword
// const me = new Student('Andrew Mead', 31, 'Computer Science');

// console.log(me);
// console.log(me.getDescription());
// console.log(me.getGreeting());
// console.log("has major: " + me.hasMajor());

// const other = new Student();
// console.log(other);
// console.log(other.getDescription());

const guy = new Traveler('Andrew Mead', 31, 'Tampa')

console.log(guy.getGreeting());


// 
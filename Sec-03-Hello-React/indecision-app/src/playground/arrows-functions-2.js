const user = {
    name: 'Andrew', 
    cities: ['Philadelphia', 'new York', 'Dublin'], 
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.group(user.printPlacesLived());


// challenge

const multiplier = {
    numbers: [10,20,30], 
    multiplyBy: 3, 
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
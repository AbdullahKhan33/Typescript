// Demo C
// Type the function, the parameter, and use arrow functions
// Learn more about interfaces in Module 3
var personImplementation = {
    name: 'John',
    age: 40,
    kids: 4,
    calcPets: function () {
        return this.kids * 2;
    },
    makeYounger: function (years) {
        this.age -= years;
    },
    greet: function (msg) {
        return msg + ', ' + this.name;
    }
};
var pets = personImplementation.calcPets();
console.log('pets = ' + pets);
personImplementation.makeYounger(10);
var newAge = personImplementation.age;
console.log('new age = ' + newAge);
var msg = personImplementation.greet('Good day');
console.log(msg);

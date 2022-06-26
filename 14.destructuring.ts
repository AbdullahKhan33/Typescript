// Before ES6:

// assigning object attributes to variables
// const person1 = {
//     name12: 'Sara',
//     age12: 25,
//     gender12: 'female'    
// }

// let name12 = person1.name12;
// let age12 = person1.age12;
// let gender12 = person1.gender12;

// console.log(name12); // Sara
// console.log(age12); // 25
// console.log(gender12); // female


// From ES6:


// assigning object attributes to variables
// const person = {
//     name1: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// // destructuring assignment
// let { name1, age, gender } = person;

// console.log(name1); // Sara
// console.log(age); // 25
// console.log(gender); // female












// When destructuring objects, you should use the same name for the variable 
// as the corresponding object key.

// let {name1, age, gender} = person;
// console.log(name1); // undefined


// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// // destructuring assignment
// // using different variable names
// let { name: name1, age: age1, gender:gender1 } = person;

// console.log(name1); // Sara
// console.log(age1); // 25
// console.log(gender1); // female





// Array Destructuring

const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x, y, z] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three














// // In object destructuring, you can pass default values in a similar way. For example,

// const person = {
//     name: 'Jack'
// }

// // assign default value 26 to age if undefined
// const { name, age = 26} = person;

// console.log(name); // Jack
// console.log(age); // 26


// // Skip Items

// const arrValue = ['one', 'two', 'three'];

// // destructuring assignment in arrays
// const [x, , z] = arrValue;

// console.log(x); // one
// console.log(z); // three


// // Assign Remaining Elements to a Single Variable


// const arrValue = ['one', 'two', 'three', 'four'];

// // destructuring assignment in arrays
// // assigning remaining elements to y
// const [x, ...y] = arrValue;

// console.log(x); // one
// console.log(y); // ["two", "three", "four"]


// // You can also assign the rest of the object properties to a single variable. For example,


// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// // destructuring assignment
// // assigning remaining properties to rest
// let { name, ...rest } = person;

// console.log(name); // Sara
// console.log(rest); // {age: 25, gender: "female"}


// // Note: The variable with the spread syntax cannot have a trailing comma ,. 
// // You should use this rest element (variable with spread syntax) as the last variable.

// const arrValue = ['one', 'two', 'three', 'four'];

// // throws an error
// const [ ...x, y] = arrValue;

// console.log(x); // eror


// // You can also perform nested destructuring for object properties. For example,

// const person = {
//     name: 'Jack',
//     age: 26,
//     hobbies: {
//         read: true,
//         playGame: true
//     }
// }
// // nested destructuring 
// const {name, hobbies: {read, playGame}} = person;

// console.log(name); // Jack
// console.log(read); // true
// console.log(playGame); // true


































// function printThis() {
//     console.log(this)
//   }
  
//   printThis() //this refers to the window, or global object.






  //Generally, it is safer to use strict mode to reduce the probability of this having an unexpected scope. 
  //Rarely will someone want to refer to the window object using this.

  // 'use strict'

  // function printThis() {
  //   console.log(this)
  // }
  
  // printThis() 





// A method is a function on an object, or a task that an object can perform. 
// A method uses this to refer to the properties of the object.
// this is the same as india.

// const india = {
//     name: 'The Country India',
//     independenceOn: 1947,
  
//     describe() {
//       console.log(`${this.name} got its independence on ${this.independenceOn}.`)
//     },
//   }
  
//   india.describe()


//   In a nested object, this refers to the current object scope of the method. In the following example, 
//   this.symbol within the details object refers to details.symbol.

// const india = {
//     name: 'The Country India',
//     independenceOn: 1947,

//     details: {
//       flag: 'Tricolored',
//       currency: 'INR',
//       printDetails() {
//         console.log(`The flag is ${this.flag} and the currency is ${this.currency}.`)
//       },
//     },
//   }
  
//   india.details.printDetails()


//   In this context, this is now bound to the instance of Country, which is contained in the india constant.

  // function Country(name, independenceOn) {
  //   this.name = name
  //   this.independenceOn = independenceOn
  
  //   this.describe = function() {
  //     console.log(`${this.name} got its independence on ${this.independenceOn}.`)
  //   }
  // }
  
  // const india = new Country('The Country India',1947)

  // india.describe()



//this in the describe method refers to the instance of Country, which is india.

  // class Country {
  //     constructor(name,independenceOn){
  //       this.name = name
  //       this.independenceOn = independenceOn
  //   }  
  //   describe() {
  //     console.log(`${this.name} got its independence on ${this.independenceOn}.`)
  //   }
  // }
  
  // const india = new Country('The Country India',1947)

  // india.describe()


// //This in a arrow function

// const myNameIs = {
//     name: 'Abdullah Khan',

//     regularFunction: function() {
//       console.log(this.name)
//     },
    
//     arrowFunction: () => {
//       console.log(this.name)
//     },
//   }
  
//   myNameIs.regularFunction() // "Abdullah Khan"
//   myNameIs.arrowFunction() // undefined



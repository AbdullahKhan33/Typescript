

// var customerName = "Abdullah";

function displayName(name)
{
    console.log("The Name is " + name);
}

displayName(customerName);



// var myIIFE = function () {
//         //write your js code here
//     };
	
// // Now, wrap it with parenthesis. However, parenthesis does not allow declaration. So just remove declaration part and just write anonymous function as below.
// (function () {
//         //write your js code here
//     });
	

// // Now, use () operator to call this anonymous function immediately after completion of its definition.
// (function () {
//     //write your js code here
// })();


// IIFE Function
// (function () {
//     console.log("The Name is Abdullah Khan");  
// })();



// // So, the above is called IIFE. You can write all the functions and variables inside IIFE without worrying about polluting the global scope or conflict with other's JavaScript code which have functions or variables with same name.
// (function () {
//     var userName = "Mark";
    
//     function showName(name)
//     {
//         console.log("Customer Name " + name);
//     }

//     showName(userName);
//   })();
  
 
// //Take the parameter out'
// var userName1 = "Mark";

// (function (name) {
    
//     function showName(name)
//     {
//         console.log("Customer Name " + name);
//     }

//     showName(name);
//   })(userName1);
 
// // Advantages of IIFE:
// // -------------------
// // Do not create unnecessary global variables and functions
// // Functions and variables defined in IIFE do not conflict with other functions & variables even if they have same name.
// // Organize JavaScript code.
// // Make JavaScript code maintainable.






// const counter = (function() {
//   let counterValue = 0;

//   return {
//     increment() {
//       ++counterValue;
//     },

//     get value() {
//       return counterValue;
//     }
//   };
// })();

// counter.increment();
// console.log(counter.value); // 1

// counter.increment();
// counter.increment();
// console.log(counter.value); // 3
















































// https://www.tutorialsteacher.com/javascript/immediately-invoked-function-expression-iife
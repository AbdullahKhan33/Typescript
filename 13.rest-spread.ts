// the third argument, manyMoreArgs, will be an array that contains 
// the 3rd, 4th, 5th, 6th ... nth — as many arguments that the user includes.

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
  }
  
  myFun("one", "two", "three", "four", "five", "six")
  
  // a, one
  // b, two
  // manyMoreArgs, [three, four, five, six]

//   Since theArgs is an array, a count of its elements is given by the length property:

  function fun1(...theArgs) {
    console.log(theArgs.length)
  }
  
  fun1()         // 0
  fun1(5)        // 1
  fun1(5, 6, 7)  // 3

//   Ordinary parameter and rest parameters
function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
      return multiplier * element
    })
  }
  
  let arr = multiply(2, 1, 2, 3)
  console.log(arr)  // [2, 4, 6]

  // To use Array methods on the arguments object, it must be converted to a real array first.

//   function sortArguments() {
//     let args = Array.from(arguments)
//     let sortedArgs = args.sort()
//     return sortedArgs
//   }
//   console.log(sortArguments(5, 3, 7, 1))  // 1, 3, 5, 7




  

// the third argument, manyMoreArgs, will be an array that contains 
// the 3rd, 4th, 5th, 6th ... nth — as many arguments that the user includes.
function myFun(a, b, c) {
    var manyMoreArgs = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        manyMoreArgs[_i - 3] = arguments[_i];
    }
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("manyMoreArgs", manyMoreArgs);
}
myFun("one", "two", "three", "four", "five", "six");
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]

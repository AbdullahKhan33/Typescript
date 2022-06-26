function retriveData(data) {
    return new Array().concat(data);
}
var myNumArr = retriveData([1, 2, 3]);
var myStrArr = retriveData(["Abdullah", "Khan"]);
myNumArr.push(400); // OK
myNumArr.push("Hi"); // OK
myStrArr.push("Hello John"); // OK
myStrArr.push(500); // OK
console.log(myNumArr); // [100, 200, 300, 400, "Hi"]
console.log(myStrArr); // ["Hello", "World", "Hello TypeScript", 500]

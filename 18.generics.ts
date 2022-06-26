function retriveData(data : any[] ) : any[] {
    return new Array().concat(data);
}


let numArr = retriveData([1, 2, 3]);
let strArr = retriveData(["Abdullah", "Khan"]);

numArr.push(4); // OK
numArr.push("Hi"); // OK

strArr.push("Hello John"); // OK
strArr.push(500); // OK

console.log(numArr); // [1, 2, 3, 4, "Hi"]
console.log(strArr); // ["Abdullah", "Khan", "Hello John", 500]



// function retriveGenData<T>(data : T[] ) : T[] {
//     return new Array<T>().concat(data);
// }



// let numberArray = retriveGenData([1, 2, 3]);
// let strArray = retriveGenData(["Abdullah", "Khan"]);

// numberArray.push(4); // OK
// numberArray.push("Hi"); // OK

// strArray.push("Hello John"); // OK
// strArray.push(500); // OK

// console.log(numberArray); // [1, 2, 3, 4, "Hi"]
// console.log(strArray); // ["Abdullah", "Khan", "Hello John", 500]



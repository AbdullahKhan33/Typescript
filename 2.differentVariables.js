//tsc .\2.differentVariables.ts | node .\2.differentVariables.js
var global_num = 12; //global variable 
var Numbers12 = /** @class */ (function () {
    function Numbers12() {
        this.num_val = 13; //class variable 
    }
    Numbers12.prototype.storeNum = function () {
        var local_variable = 14; //local variable 
        console.log("Local Variable : " + local_variable);
    };
    Numbers12.static_val = 10; //static field 
    return Numbers12;
}());
console.log("Global num: " + global_num);
var obj = new Numbers12();
console.log("Class num: " + obj.num_val);
obj.storeNum();
console.log("static numbers: " + Numbers12.static_val); //static variable  

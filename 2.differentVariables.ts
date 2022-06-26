var global_num = 12          //global variable 

class Numbers123 { 
   num_val = 13;             //class variable 
   static static_val = 10;         //static field 
   
   storeNum():void { 
      var local_variable = 14;    //local variable 
      console.log("Local Variable : " + local_variable)
   } 
} 

console.log("Global num: "+global_num)  

var obj = new Numbers123(); 
console.log("Class num: "+obj.num_val)
obj.storeNum();

console.log("static numbers: " + Numbers123.static_val)   //static variable  
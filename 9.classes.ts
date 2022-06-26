class Car {   
    Color:string     
    constructor(color:string) {   
       this.Color = color  
    }   
 }  
  
 class Benz extends Car {   
     Price: number  
     constructor(color: string, price: number) {  
         super(color);  
         this.Price = price;  
     }  
     display():void {  
         console.log("Color of Benz car: " + this.Color);  
         console.log("Price of Benz car: " + this.Price);  
     }  
 } 

 let obj = new Benz(" White", 8500000 );  
 obj.display();  
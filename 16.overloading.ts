class Calculator { 
    Add(stringParameter: string): void;
    Add(numberParameter: number, stringParameter: string): void;
    
    Add(a: string | number, b?: string | number): void {
        
        let stringParameter!: string;
        let numberParameter!: number;

            if (typeof a === 'string') {
                stringParameter = a;
            } else {
                numberParameter = a;

                if (typeof b === 'string') {
                stringParameter = b;
                }
            }
            console.log("String Parameter: " + stringParameter);
            console.log("Number Parameter: "+ numberParameter)
        }
 } 

 var clac = new Calculator();
 clac.Add("Mark");
 clac.Add(23, "Luke");
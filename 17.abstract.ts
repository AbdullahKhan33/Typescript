abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    showName(): void{
        console.log(this.name);
    }

    abstract GetDetails(string): Person;
}

class Employee extends Person { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name); // must call super()
        this.empCode = code;
    }

    GetDetails(name:string): Person { 
        // Call API to retrive Employee Details
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("Abdullah", 100);
emp.showName(); //Abdullah

let emp2: Person = emp.GetDetails('Mark');
emp2.showName();
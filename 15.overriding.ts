class ParentClass { 
    parentMethod():void {
       console.log("parentMethod() from Parent calledâ€¦") 
    } 
 } 
 
 class ChildClass extends ParentClass { 
    parentMethod():void { 
       super.parentMethod() 
       console.log("childMethod() is executed")
    } 
 } 
 
 var child = new ChildClass() 
 child.parentMethod()
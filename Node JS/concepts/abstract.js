function Employee(name,basesalary,age){
    this.name = name;
    this.age = age;
    this.basesalary = basesalary;
    let monthlybonus = 2000;
    
    let calculatefinalsalary = function finalsalary(){      /*this function is hidden from 
                                                       the user as it's scope lies within the function,means we can't call this function from outside*/
        let totsalary = basesalary + monthlybonus;
        return totsalary;
        
    }

    this.getEmpDetails = function() {
        console.log(`Name is ${this.name} | Age is ${this.age}`);
        console.log('Final Salary is ',calculatefinalsalary());
    }
}


let emp = new Employee('Amir',70000,28);
emp.getEmpDetails();

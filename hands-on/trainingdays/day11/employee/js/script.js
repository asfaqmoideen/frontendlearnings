class Employee{

    constructor(id, name, depId, location){
        this.id = id;
        this.name = name;
        this.depId = depId;
        this.location = location;
    }
}

class EmployeeController{
    
    constructor(){
        this.employees = [{id:1, name:"Asfaq", depId:"20", location:"CJB"}];
    }

    addEmployee(employee){
        if(employee.name && employee.depId){
            this.employees.push(employee);
            return true;
        }
        return false;
    }

    updateEmployee(updatedEmployee){

        const employeeToUpdate = this.employees.find(e=>e.id==updatedEmployee.id)

        if(employeeToUpdate){
            employeeToUpdate.name = updatedEmployee.name;
            employeeToUpdate.depId = updatedEmployee.depId;
            employeeToUpdate.location = updatedEmployee.location;
            return true;
        }

        return false;
    }

    findExistingEmployee(id){
        return this.employees.find(e=>e.id==id)
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    const empLogic = new EmployeeController();
    const uiLogic = new UIController(empLogic);
    const empId = document.getElementById("empNo");
    const button = document.getElementById("addOrUpd");

    uiLogic.displayEmployeeList();

    empId.addEventListener('change', ()=>{
        if(empLogic.findExistingEmployee(empId.value)){
            button.textContent = "Update";
            uiLogic.updateInputValues(empId.value);
        }
        if(!empLogic.findExistingEmployee(empId.value)){
            button.textContent = "Add";
        }
    })

    button.addEventListener('click', ()=>{
        if(button.textContent == "Update"){
         if(uiLogic.tryUpdatingEmployee()){
            uiLogic.displayEmployeeList();
            uiLogic.resetInputs();
            uiLogic.displayMessage("Updated !");
        }
        else{
        uiLogic.displayMessage("Not Updated !");
         }
        }

        else if(button.textContent == "Add"){
        if(uiLogic.tryAddingEmployee()){
            uiLogic.displayEmployeeList();
            uiLogic.resetInputs();
            uiLogic.displayMessage(" Employee Added !");
        }
        else{
        uiLogic.displayMessage("Invalid Inputs, Not Added !");
        }
    }
    })
})

class UIController{
    constructor(emplogic){
        this.empLogic = emplogic;
    }

    updateInputValues(id){
        const employee = this.empLogic.findExistingEmployee(id);

        document.getElementById("empName").value = employee.name;
        document.getElementById("deptId").value = employee.depId;
        document.getElementById("location").value = employee.location;
    }

    tryUpdatingEmployee(){
        const employee = this.getEmployeeDetails();

        return this.empLogic.updateEmployee(employee);
    }

    tryAddingEmployee(){
        const employee = this.getEmployeeDetails();
        return this.empLogic.addEmployee(employee);
    }

    getEmployeeDetails(){
        return new Employee(
            document.getElementById("empNo").value,
            document.getElementById("empName").value,
            document.getElementById("deptId").value,
            document.getElementById("location").value
            );
    }

    resetInputs(){
        document.getElementById('empNo').value= "";
        document.getElementById('empName').value="";
        document.getElementById('deptId').value="";
        document.getElementById('location').value="";
    }

    displayMessage(message){
        document.getElementById('message').textContent = message;
        setTimeout(f=>{document.getElementById('message').textContent = "";}, 3000);
    }
    displayEmployeeList(){

        const empList = document.getElementById('empList');
        empList.textContent =" ";

        this.empLogic.employees.forEach(element => {
            const listItem = document.createElement('li');
            listItem.textContent = `${element.id} - ${element.name} - ${element.depId} -${element.location}`
            empList.appendChild(listItem);
        });
    }
}
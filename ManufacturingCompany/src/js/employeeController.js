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
    const empTitle = document.getElementById("emp-title");
    const empform = document.getElementById('add-emp');

    uiLogic.displayEmployeeList();

    empId.addEventListener('change', ()=>{
        if(empLogic.findExistingEmployee(empId.value)){
            button.textContent = "Update";
            empTitle.textContent = "Update Employee";
            uiLogic.updateInputValues(empId.value, empform);
        }
        if(!empLogic.findExistingEmployee(empId.value)){
            button.textContent = "Add";
            empTitle.textContent = "Add an Employee";
        }
    })

    empform.addEventListener('submit', (event)=>{
        event.preventDefault();

        if(button.textContent == "Update"){
            if(uiLogic.tryUpdatingEmployee(empform)){
            uiLogic.displayEmployeeList();
            empform.reset();
            uiLogic.displayMessage("Updated !");
            button.textContent = "Add";
            empTitle.textContent = "Add an Employee";
            }
            else{
            uiLogic.displayMessage("Not Updated !");
            }
        }

        else if(button.textContent == "Add"){
            if(uiLogic.tryAddingEmployee(empform)){
            uiLogic.displayEmployeeList();
            empform.reset();
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

    tryUpdatingEmployee(empform){
        const employee = this.getEmployeeDetails(empform);
        return this.empLogic.updateEmployee(employee);
    }

    tryAddingEmployee(empform){
        const employee = this.getEmployeeDetails(empform);
        return this.empLogic.addEmployee(employee);
    }

    getEmployeeDetails(empform){
        return new Employee(empform.empNo.value, 
            empform.empName.value, empform.deptId.value, empform.location.value);
    }
    displayMessage(message){
        document.getElementById('message').textContent = message;
        setTimeout(f=>{document.getElementById('message').textContent = "";}, 3000);
    }

    displayEmployeeList() {
        const table = document.querySelector('#disp-table tbody');
        table.textContent = ""; 
        this.empLogic.employees.forEach(employee => {
            const row = document.createElement('tr');
            
            const idCell = document.createElement('td');
            idCell.textContent = employee.id;
            row.appendChild(idCell);
            
            const nameCell = document.createElement('td');
            nameCell.textContent = employee.name; 
            row.appendChild(nameCell);
            
            const depCell = document.createElement('td');
            depCell.textContent = employee.depId;
            row.appendChild(depCell);

            const locCell = document.createElement('td');
            locCell.textContent = employee.location;
            row.appendChild(locCell);
            
            table.appendChild(row); 
        });
    }

}
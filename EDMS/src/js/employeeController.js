

class EmployeeController{
    constructor(){
        this.employees = [
                { id: 1007, firstName: "Aditya", lastName: "Rao", dob: "1994-05-17", doj: "2017-09-25", grade: "M1" },
                { id: 1008, firstName: "Sanya", lastName: "Rao", dob: "1992-12-09", doj: "2018-03-14", grade: "M2" }, 
                { id: 1009, firstName: "Aakash", lastName: "Mehta", dob: "1994-05-17", doj: "2020-01-19", grade: "M1" }, 
                { id: 1010, firstName: "Pooja", lastName: "Khan", dob: "1995-07-10", doj: "2017-09-25", grade: "M3" }, 
                { id: 1011, firstName: "Ravi", lastName: "Naidu", dob: "1988-11-03", doj: "2014-07-16", grade: "M1" }, 
                { id: 1012, firstName: "Priya", lastName: "Gupta", dob: "1992-12-09", doj: "2021-02-20", grade: "M1" }, 
                { id: 1013, firstName: "Arjun", lastName: "Singh", dob: "1990-09-12", doj: "2015-10-01", grade: "M3" },
                { id: 1014, firstName: "Tanya", lastName: "Mehta", dob: "1994-05-17", doj: "2017-08-11", grade: "M2" }, 
                { id: 1015, firstName: "Vikas", lastName: "Saxena", dob: "1987-03-15", doj: "2012-11-05", grade: "M4" },
                { id: 1016, firstName: "Neha", lastName: "Khan", dob: "1995-07-10", doj: "2016-06-18", grade: "M2" },
                { id: 1017, firstName: "Raj", lastName: "Chawla", dob: "1993-10-09", doj: "2019-01-25", grade: "M1" },
                { id: 1018, firstName: "Shruti", lastName: "Bansal", dob: "1998-03-03", doj: "2022-09-15", grade: "M1" },
                { id: 1019, firstName: "Anil", lastName: "Naidu", dob: "1989-05-11", doj: "2014-07-16", grade: "M4" },
                { id: 1020, firstName: "Kritika", lastName: "Agarwal", dob: "1996-11-18", doj: "2020-07-07", grade: "M2" },
                { id: 1021, firstName: "Harsh", lastName: "Bhatia", dob: "1994-01-26", doj: "2017-03-10", grade: "M1" },
                { id: 1022, firstName: "Maya", lastName: "Rajput", dob: "1990-12-07", doj: "2015-08-02", grade: "M2" },
                { id: 1023, firstName: "Kunal", lastName: "Kapoor", dob: "1997-04-15", doj: "2021-11-01", grade: "M1" },
                { id: 1024, firstName: "Ishita", lastName: "Chopra", dob: "1995-07-10", doj: "2023-02-28", grade: "M3" }, 
                { id: 1025, firstName: "Deepak", lastName: "Yadav", dob: "1991-06-10", doj: "2015-05-19", grade: "M2" },
                { id: 1026, firstName: "Sakshi", lastName: "Shah", dob: "1993-10-09", doj: "2018-04-30", grade: "M1" },
        ];

    }



    modifyEmployee(employee){
        const employeeToBeEdited = this.employees.find(e=> e.id == employee.id);
        if(employeeToBeEdited){
            employeeToBeEdited.firstName = employee.firstName;
            employeeToBeEdited.lastName = employee.lastName;
            employeeToBeEdited.dob = employee.dob;
            employeeToBeEdited.doj = employee.doj;
            employeeToBeEdited.grade = employee.grade;
        }
    }

    searchEmployee(searchfields){
        if (!searchfields.id && !searchfields.fname && !searchfields.lname && !searchfields.dob && !searchfields.doj && !searchfields.grade) {
            return false;
        }
        const results = this.employees.filter(employee => {
            return (
                (!searchfields.id || employee.id.toString() === searchfields.id) &&
                (!searchfields.fname || employee.firstName.toLowerCase().includes(searchfields.fname.toLowerCase())) &&
                (!searchfields.lname || employee.lastName.toLowerCase().includes(searchfields.lname.toLowerCase())) &&
                (!searchfields.dob || searchfields.dob === employee.dob) &&
                (!searchfields.doj || searchfields.doj === employee.doj) &&
                (!searchfields.grade || searchfields.grade === employee.grade)
            );
        });

        return results;

    }
    
    searchAny(searchfield) {
        if (!searchfield) {
            return false;
        }

        const result = this.employees.filter(employee => {
            const searchLower = searchfield.toLowerCase();
            return (
                employee.id.toString().includes(searchfield) ||
                employee.firstName.toLowerCase().includes(searchLower) ||
                employee.lastName.toLowerCase().includes(searchLower) ||
                employee.dob.toLowerCase().includes(searchLower) ||
                employee.doj.toLowerCase().includes(searchLower) ||
                employee.grade.toLowerCase().includes(searchLower)
            );
        });
        console.log(result);
        return result;
    }    
    }


document.addEventListener('DOMContentLoaded',()=>{
    
    const empcont = new EmployeeController();
    const uicon = new UIController(empcont);
    uicon.populateEmployeeTable(empcont.employees);

    const simform = document.getElementById('navsearch')
    const search = document.getElementById('search-btn-emp');
    const serchform = document.getElementById('search-form');
    const searchtitle = document.getElementById('search-results-title');

    const backfromsearch = document.getElementById('back-from-serachresults');
    serchform.addEventListener('submit', (event)=>{
        event.preventDefault();
        compsearch.style.display = 'none';
        overlay.style.display = 'none';
        if(search.textContent == "Search"){
            const results = empcont.searchEmployee({
                id:serchform.empId.value,
                fname:serchform.firstName.value,
                lname:serchform.lastname.value,
                dob:serchform.dob.value,
                doj:serchform.doj.value,
                grade:serchform.grade.value
            })
            if(!results){
                uicon.displayMessage("Atleast One Field Must be Given!");
                return;
            }
            uicon.populateEmployeeTable(results);
            searchtitle.textContent = "Search Results";
            backfromsearch.style.display = 'block'
            serchform.reset();
        }
        else if(search.textContent == "Save" ){
            empcont.modifyEmployee(uicon.compileEmployeeData());
            uicon.populateEmployeeTable(empcont.employees);
            const title = document.getElementById('emp-details-title');
            title.textContent = "Search Employee";  
        
            const btn = document.getElementById('search-btn-emp');
            btn.textContent = "Search";
            serchform.reset();
            uicon.displayMessage("Employee Updated!")
        }
    });
    
    const searchresultsback = document.getElementById('back-from-serachresults');
    searchresultsback.addEventListener('click', ()=>{
        const title = document.getElementById('emp-details-title');
        title.textContent = "Search Employee";  
        uicon.populateEmployeeTable(empcont.employees);
        const btn = document.getElementById('search-btn-emp');
        btn.textContent = "Search";
        searchtitle.textContent = "All Employees";
        backfromsearch.style.display = "none";
        simform.value = "";
    });
    
    const closebtn = document.getElementById('back-from-dialog');
    closebtn.addEventListener('click', function() {
        dialog2.style.display = 'none';
        overlay.style.display = 'none';
    });
    
    const dialog2 = document.getElementById('import-file');
    const overlay = document.getElementById('overlay');
    const importbtn = document.getElementById('import-file-home');
    importbtn.addEventListener('click', function() {
        dialog2.style.display = 'block';
        overlay.style.display = 'block';
        
    });

    const compsearch = document.getElementById('emp-details');
    document.getElementById('complex-search').addEventListener('click', ()=>{
        compsearch.style.display = 'block';
        overlay.style.display = 'block';
        if(document.getElementById('empId').disabled){
        document.getElementById('empId').disabled = false ; 
        }
    });

    document.getElementById('close-search').addEventListener('click', ()=>{
        compsearch.style.display = 'none';
        overlay.style.display = 'none';
    });

    simform.addEventListener('change', ()=>{
        uicon.populateEmployeeTable(empcont.searchAny(simform.value));
        searchtitle.textContent = "Search Results";
        backfromsearch.style.display = 'block'
    });

})

class UIController{
    constructor(empcon){
        this.empcon = empcon
    }

    compileEmployeeData(){
        
        return{
            id: document.getElementById('empId').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastname').value,
            dob: document.getElementById('dob').value,
            doj: document.getElementById('doj').value,
            grade: document.getElementById('grade').value
        }
    }

    populateEmployeeTable(employees) {
        const table = document.querySelector("#employee-table tbody");
        if(employees.length ==0){
            table.textContent = 'No Results Found';
            return;
        }
        table.textContent = " "
        employees.forEach((employee) => {
            const row = document.createElement("tr");
    
            const idCell = document.createElement("td");
            idCell.textContent = employee.id;
            row.appendChild(idCell);
    
            const firstNameCell = document.createElement("td");
            firstNameCell.textContent = employee.firstName;
            row.appendChild(firstNameCell);
    
            const lastNameCell = document.createElement("td");
            lastNameCell.textContent = employee.lastName;
            row.appendChild(lastNameCell);
    
            const dobCell = document.createElement("td");
            dobCell.textContent = employee.dob;
            row.appendChild(dobCell);
    
            const dojCell = document.createElement("td");
            dojCell.textContent = employee.doj;
            row.appendChild(dojCell);
    
            const gradeCell = document.createElement("td");
            gradeCell.textContent = employee.grade;
            row.appendChild(gradeCell); 
    
            const modifyCell = document.createElement("td");
            const modifyLink = document.createElement("button");
            modifyLink.textContent = "✏️";
            modifyLink.className = 'iconbtn';
            modifyCell.appendChild(modifyLink);
            row.appendChild(modifyCell);
            modifyLink.addEventListener('click', ()=>{
                this.updateWithEmpForm(employee);
                document.getElementById('emp-details').style.display = 'block';
            })
            
            table.appendChild(row);
        });
        
    }

    displayMessage(message){
        const messageDiv = document.getElementById('messageDiv');
        messageDiv.textContent = message;
        setTimeout(function(){messageDiv.textContent = " "}, 3000);
    }
    
    updateWithEmpForm(employee) {
        const title = document.getElementById('emp-details-title');
        title.textContent = "Modify Employee";  
    
        const btn = document.getElementById('search-btn-emp');
        btn.textContent = "Save";

        document.getElementById('empId').value = employee.id || '';
        document.getElementById('empId').disabled = true;
        document.getElementById('firstName').value = employee.firstName || '';
        document.getElementById('lastname').value = employee.lastName || '';
        document.getElementById('dob').value = employee.dob || '';
        document.getElementById('doj').value = employee.doj || '';
        document.getElementById('grade').value = employee.grade || '';

    }
}
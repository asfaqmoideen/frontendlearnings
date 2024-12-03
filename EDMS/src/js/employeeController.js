
class Employee{
    constructor(id, fname, lname, dob, doj, grade){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
        this.doj = doj;
        this.grade = grade;
    }
}

class EmployeeController{
    constructor(){
        this.employees = [
            { id: 1007, firstName: "Aditya", lastName: "Rao", dob: "1994-05-17", doj: "2017-09-25", grade: "M1" },
            { id: 1008, firstName: "Sanya", lastName: "Deshmukh", dob: "1992-12-09", doj: "2018-03-14", grade: "M2" },
            { id: 1009, firstName: "Aakash", lastName: "Mehta", dob: "1996-04-22", doj: "2020-01-19", grade: "M1" },
            { id: 1010, firstName: "Pooja", lastName: "Khan", dob: "1995-07-10", doj: "2019-05-22", grade: "M3" },
            { id: 1011, firstName: "Ravi", lastName: "Naidu", dob: "1988-11-03", doj: "2014-07-16", grade: "M4" },
            { id: 1012, firstName: "Priya", lastName: "Gupta", dob: "1997-06-19", doj: "2021-02-20", grade: "M1" },
            { id: 1013, firstName: "Arjun", lastName: "Singh", dob: "1990-09-12", doj: "2015-10-01", grade: "M3" },
            { id: 1014, firstName: "Tanya", lastName: "Shah", dob: "1994-02-28", doj: "2017-08-11", grade: "M2" },
            { id: 1015, firstName: "Vikas", lastName: "Saxena", dob: "1987-03-15", doj: "2012-11-05", grade: "M4" },
            { id: 1016, firstName: "Neha", lastName: "Kapoor", dob: "1991-08-20", doj: "2016-06-18", grade: "M2" },
            { id: 1017, firstName: "Raj", lastName: "Chawla", dob: "1993-10-09", doj: "2019-01-25", grade: "M1" },
            { id: 1018, firstName: "Shruti", lastName: "Bansal", dob: "1998-03-03", doj: "2022-09-15", grade: "M1" },
            { id: 1019, firstName: "Anil", lastName: "Joshi", dob: "1989-05-11", doj: "2013-04-22", grade: "M4" },
            { id: 1020, firstName: "Kritika", lastName: "Agarwal", dob: "1996-11-18", doj: "2020-07-07", grade: "M2" },
            { id: 1021, firstName: "Harsh", lastName: "Bhatia", dob: "1994-01-26", doj: "2017-03-10", grade: "M1" },
            { id: 1022, firstName: "Maya", lastName: "Rajput", dob: "1990-12-07", doj: "2015-08-02", grade: "M2" },
            { id: 1023, firstName: "Kunal", lastName: "Verma", dob: "1997-04-15", doj: "2021-11-01", grade: "M1" },
            { id: 1024, firstName: "Ishita", lastName: "Chopra", dob: "1999-07-22", doj: "2023-02-28", grade: "M3" },
            { id: 1025, firstName: "Deepak", lastName: "Yadav", dob: "1991-06-10", doj: "2015-05-19", grade: "M2" },
            { id: 1026, firstName: "Sakshi", lastName: "Malhotra", dob: "1993-10-17", doj: "2018-04-30", grade: "M1" },
        ];

    }

    populateEmployeeTable() {
        const table = document.querySelector("#employee-table tbody");

        this.employees.forEach((employee) => {
            // Create a new row
            const row = document.createElement("tr");
    
            // Create and append individual table cells
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
            modifyLink.textContent = "Modify";
            modifyCell.appendChild(modifyLink);
            row.appendChild(modifyCell);
            modifyLink.addEventListener('click', ()=>{
                this.updateWithEmpForm(employee);
            })
            
            table.appendChild(row);
        });
        
    }

    
    updateWithEmpForm(employee) {
        // Update form input values using their IDs
        document.getElementById('empId').value = employee.id || '';
        document.getElementById('firstName').value = employee.firstName || '';
        document.getElementById('lastname').value = employee.lastName || '';
        document.getElementById('dob').value = employee.dob || '';
        document.getElementById('doj').value = employee.doj || '';
        document.getElementById('grade').value = employee.grade || '';
    }

    }


document.addEventListener('DOMContentLoaded',()=>{
    const overlay = document.getElementById('overlay');

    const importbtn = document.getElementById('import-file-home');
    const closebtn = document.getElementById('back-from-dialog');
    const dialog2 = document.getElementById('import-file');
    const search = document.getElementById('search-btn-emp');
    const searchresults = document.getElementById('search-results');
    const searchresultsback = document.getElementById('back-from-serachresults');
    const empcont = new EmployeeController();
    
    search.addEventListener('click', ()=>{
        searchresults.style.display = 'block';
        empcont.populateEmployeeTable();
    });

    searchresultsback.addEventListener('click', ()=>{
        searchresults.style.display = 'none';
        const title = document.getElementById('emp-details-title');
        title.textContent = "Search Employee";  
    
        const btn = document.getElementById('search-btn-emp');
        btn.textContent = "Search";
    })
    closebtn.addEventListener('click', function() {
        dialog2.style.display = 'none';
        overlay.style.display = 'none';
    });
    
    importbtn.addEventListener('click', function() {
        dialog2.style.display = 'block';
        overlay.style.display = 'block';
        
    });
})

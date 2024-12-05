const employees = [
    {
        id: 500943,
        firstName: "Vijay",
        lastName: "V",
        dob: "2000-11-11",
        doj: "2022-02-22",
        grade: "M1",
    },
    {
        id: 500945,
        firstName: "Vinay",
        lastName: "Sharma",
        dob: "2000-02-2",
        doj: "2024-11-11",
        grade: "M3",
    },
    {
        id: 500946,
        firstName: "Jeeva",
        lastName: "Sai",
        dob: "2008-11-11",
        doj: "2023-02-22",
        grade: "M3",
    },
];

const headings = [
    "Employee ID",
    "First Name",
    "Last Name",
    "Date of Birth",
    "Date of Joining",
    "Grade",
    "View",
];
document.addEventListener('DOMContentLoaded',()=>{
    const overlay = document.getElementById('overlay');

    // const searchbtn = document.getElementById('search-in-home');
    // const closeButton = document.getElementById('back-from-search');
    // const dialog = document.getElementById('emp-details');
    
    //     searchbtn.addEventListener('click', function() {
    //         dialog.style.display = 'block';
    //         overlay.style.display = 'block';
    //     });
        
        
    //     closeButton.addEventListener('click', function() {
    //         dialog.style.display = 'none';
    //         overlay.style.display = 'none';
    //     });

    const importbtn = document.getElementById('import-file-home');
    const closebtn = document.getElementById('back-from-dialog');
    const dialog2 = document.getElementById('import-file');
    const search = document.getElementById('search-btn-emp');
    const searchresults = document.getElementById('search-results');
    const searchresultsback = document.getElementById('back-from-serachresults');
    const loginbtn = document.getElementById('login');
    
    search.addEventListener('click', ()=>{
        searchresults.style.display = 'block';
        populateEmployeeTable();
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

    loginbtn.addEventListener('click', ()=>{
        const username = document.getElementById('login');
        const namespan = document.getElementById('usernamedisp');
        namespan.textContent = username.value;
    })

})

function populateEmployeeTable() {
    const table = document.getElementById("employee-table");
    table.textContent ="";
    // Create thead and tbody
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headerRow = document.createElement("tr");
    headings.forEach((heading) => {
        const th = document.createElement("th");
        th.textContent = heading;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

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
        modifyLink.textContent = "Modify";
        modifyCell.appendChild(modifyLink);
        row.appendChild(modifyCell);
        modifyLink.addEventListener('click', ()=>{
            updateTable(employee);
        })
        
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    
}

function updateTable(employee){
    console.log(employee);
    const title = document.getElementById('emp-details-title');
    title.textContent = "Modify Employee";  

    const btn = document.getElementById('search-btn-emp');
    btn.textContent = "Save";

    const empid = document.getElementById('empId');
    empid.value = employee.id;
    empid.disabled = true;

    const empfname = document.getElementById('firstName');
    empfname.value = employee.firstName;

    const emplname = document.getElementById('lastname');
    emplname.value = employee.lastName;

    const dob = document.getElementById('dob');
    dob.value = employee.dob;

    const doj = document.getElementById('doj');
    doj.value = employee.doj;

    const grade = document.getElementById('grade');
    grade.value = employee.grade;
}

function updateWithEmpForm(employee){
    const employeeform = document.querySelectorAll('emp-details');

    employeeform.empid = employee.id;
    employeeform.firstName = employee.empfname;
    employeeform.lastName= employee.emplname;
    employeeform.dob = employee.dob;
    employeeform.doj = employee.doj;
    employeeform.grade = employee.grade;
}
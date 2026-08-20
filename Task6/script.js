let employees = [
    {
        id: 101,
        name: "Noorul",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: new Date("2022-06-15")
    },
    {
        id: 102,
        name: "Basith",
        department: "HR",
        salary: 30000,
        experience: 3,
        skills: ["Recruitment", "Communication"],
        joiningDate: new Date("2021-03-10")
    },
    {
        id: 103,
        name: "Harrish",
        department: "Finance",
        salary: 70000,
        experience: 5,
        skills: ["Excel", "Accounting"],
        joiningDate: new Date("2019-01-05")
    },
    {
        id: 104,
        name: "Sachin",
        department: "IT",
        salary: 55000,
        experience: 4,
        skills: ["React", "Node"],
        joiningDate: new Date("2020-09-20")
    },
    {
        id: 105,
        name: "Subash",
        department: "Testing",
        salary: 38000,
        experience: 2,
        skills: ["Manual", "Selenium"],
        joiningDate: new Date("2023-02-18")
    },
    {
        id: 106,
        name: "Nisha",
        department: "Support",
        salary: 28000,
        experience: 1,
        skills: ["Customer Support"],
        joiningDate: new Date("2024-01-10")
    },
    {
        id: 107,
        name: "Aadith",
        department: "IT",
        salary: 90000,
        experience: 7,
        skills: ["Java", "Spring Boot"],
        joiningDate: new Date("2018-11-12")
    },
    {
        id: 108,
        name: "Babul",
        department: "Admin",
        salary: 42000,
        experience: 3,
        skills: ["Office", "Management"],
        joiningDate: new Date("2021-07-25")
    }
];

function displayEmployees() {

    console.log("Employee List");

    employees.forEach(emp => {

        console.log(emp);

    });

}

displayEmployees();


let highSalary = employees.filter(emp => emp.salary > 40000);

console.log("High Salary Employees");

console.log(highSalary);

function searchEmployee(id){

    return employees.find(emp => emp.id === id);

}

console.log(searchEmployee(104));


function totalSalary(){

    return employees.reduce((total, emp)=> total + emp.salary,0);

}

console.log("Total Salary:", totalSalary());


let salaryCheck = employees.some(emp=>emp.salary>100000);

console.log("Any Salary Above 100000:",salaryCheck);


let experienceCheck = employees.every(emp=>emp.experience>=1);

console.log("Everyone has Experience:",experienceCheck);



let sortedEmployees = [...employees];

sortedEmployees.sort((a,b)=>b.salary-a.salary);

console.log(sortedEmployees);

employees.push({
    id:109,
    name:"Dinesh",
    department:"Sales",
    salary:35000,
    experience:2,
    skills:["Marketing"],
    joiningDate:new Date()
});

console.log("After Push");

console.log(employees);

employees.pop();

employees.unshift({
    id:100,
    name:"Admin",
    department:"Management",
    salary:100000,
    experience:10,
    skills:["Leadership"],
    joiningDate:new Date("2015-01-01")
});

employees.shift();

let {name,department,salary,skills}=employees[0];

let [skill1,skill2,...remainingSkills]=skills;

console.log(name);
console.log(department);
console.log(salary);

console.log(skill1);
console.log(skill2);
console.log(remainingSkills);



let copiedEmployees=[...employees];

console.log(copiedEmployees);

function employeeSkills(name,...skills){

    console.log("Employee:",name);

    console.log("Skills:",skills);

}

employeeSkills("Noorul","HTML","CSS","JavaScript","React");


function addEmployee(employee){

    employees.push(employee);

}

function deleteEmployee(id){

    let index=employees.findIndex(emp=>emp.id===id);

    if(index!=-1){

        employees.splice(index,1);

    }

}

function searchEmployeeById(id){

    return employees.find(emp=>emp.id===id);

}

function calculateTotalSalary(){

    return employees.reduce((sum,emp)=>sum+emp.salary,0);

}

function showEmployees(){

    employees.forEach(emp=>console.log(emp));

}

employees.forEach(emp=>{

    let category="";

    if(emp.salary<=30000){

        category="Junior";

    }
    else if(emp.salary<=60000){

        category="Mid Level";

    }
    else{

        category="Senior";

    }

    console.log(emp.name+" : "+category);

});


employees.forEach(emp=>{

    console.log(emp.name);

    console.log("Joining Year:",emp.joiningDate.getFullYear());

    console.log("Joining Month:",emp.joiningDate.getMonth()+1);

});


let employeeId = Number(prompt("Enter Employee ID"));

let employee = employees.find(emp=>emp.id===employeeId);

if(employee){

    console.log(employee);

}
else{

    console.log("Employee Not Found");

}


let choice;

do{

choice=Number(prompt(

`1.Display
2.Add
3.Search
4.Filter Salary
5.Total Salary
6.Sort Salary
7.Delete
8.Exit`

));

switch(choice){

case 1:

showEmployees();

break;

case 2:

addEmployee({

id:Number(prompt("ID")),

name:prompt("Name"),

department:prompt("Department"),

salary:Number(prompt("Salary")),

experience:Number(prompt("Experience")),

skills:[prompt("Skill")],

joiningDate:new Date()

});

break;

case 3:

console.log(searchEmployeeById(Number(prompt("Enter ID"))));

break;

case 4:

console.log(employees.filter(emp=>emp.salary>40000));

break;

case 5:

console.log(calculateTotalSalary());

break;

case 6:

console.log([...employees].sort((a,b)=>b.salary-a.salary));

break;

case 7:

deleteEmployee(Number(prompt("Enter ID")));

break;

case 8:

console.log("Thank You");

break;

default:

console.log("Invalid Choice");

}

}
while(choice!==8);
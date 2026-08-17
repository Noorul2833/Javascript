
console.log("Task 1");

let salary = 30000;
let bonus = 5000;
let tax = 2000;

let finalSalary = salary + bonus - tax;

console.log("Salary:", salary);
console.log("Bonus:", bonus);
console.log("Tax:", tax);
console.log("Final Salary:", finalSalary);


console.log("Task 2");

let a = 10;
let b = a++;
let c = ++a;

console.log("a =", a);
console.log("b =", b);
console.log("c =", c);


console.log("Task 3");


console.log(10 > 5 && 20 < 10 || 5 === "5"); 
console.log(10 < 5 || 20 >= 20 && 5 == "5"); 
console.log(!(10 > 5)); 



console.log("Task 4");

let balance = 10000;
let withdrawal = 2500;

if (withdrawal <= 0) {

    console.log("Invalid Withdrawal Amount");

}
else if (withdrawal > balance) {

    console.log("Insufficient Balance");

}
else if (withdrawal % 100 !== 0) {

    console.log("Withdrawal amount should be multiple of 100");

}
else {

    balance = balance - withdrawal;

    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ₹" + balance);

}


console.log("Task 5");

let mark = 78;

if (mark >= 90 && mark <= 100) {

    console.log("Grade A");

}
else if (mark >= 80) {

    console.log("Grade B");

}
else if (mark >= 70) {

    console.log("Grade C");

}
else if (mark >= 60) {

    console.log("Grade D");

}
else {

    console.log("Fail");

}


console.log("Task 6");

let username = "admin";
let password = "1234";
let otp = 5555;

if (username === "admin") {

    if (password === "1234") {

        if (otp === 5555) {

            console.log("Login Successful");

        } else {

            console.log("Invalid OTP");

        }

    } else {

        console.log("Invalid Password");

    }

} else {

    console.log("Invalid Username");

}


console.log("Task 7");

for (let i = 1; i <= 10; i++) {

    console.log(i);

}


console.log("Task 8");

let num = 7;

for (let i = 1; i <= 10; i++) {

    console.log(num + " x " + i + " = " + (num * i));

}


console.log("Task 9");

let count = 10;

while (count >= 0) {

    console.log(count);

    count--;

}


console.log("Task 10");

let correctOTP = 1234;

let attempts = 1;

while (attempts <= 3) {

    let enteredOTP = prompt("Enter the OTP:-");

    if (enteredOTP == correctOTP) {

        console.log("OTP Verified");

        break;

    } else {

        console.log("Wrong OTP");

    }

    if (attempts === 3) {

        console.log("Account Blocked");

    }

    attempts++;

}


console.log("Task 11");

let fruits = [
    "apple",
    "banana",
    "orange",
    "grapes",
    "mango"
];

for (let fruit of fruits) {

    console.log(fruit);

}

console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);



console.log("Task 12");

let employee = {

    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000

};


for (let key in employee) {

    console.log(key + " : " + employee[key]);

}

console.log("Task 13");

function calculator(a, b, operator) {

    switch (operator) {

        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            return a / b;

        case "%":
            return a % b;

        default:
            return "Invalid Operator";

    }

}

console.log(calculator(20, 5, "+"));
console.log(calculator(20, 5, "-"));
console.log(calculator(20, 5, "*"));
console.log(calculator(20, 5, "/"));
console.log(calculator(20, 5, "%"));


console.log("Task 14");

function salaryDetails(salary, bonus) {

    return salary + bonus;

}

console.log("Final Salary:", salaryDetails(40000, 5000));


console.log("Task 15");

function employeeDetails(name, role = "Trainee") {

    console.log("Name:", name);
    console.log("Role:", role);

}

employeeDetails("Arun");

employeeDetails("Kamal", "Developer");


console.log("Task 16");

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function calculate(a, b, callback) {
    return callback(a, b);
}

console.log("Addition:", calculate(20, 10, add));
console.log("Subtraction:", calculate(20, 10, sub));
console.log("Multiplication:", calculate(20, 10, mul));



console.log("Task 17");

function* rewards() {

    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next Time";

}

let reward = rewards();

console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);


console.log("Task 18");

let frontend = [
    "HTML",
    "CSS",
    "JavaScript"
];

let backend = [
    "Node",
    "Express",
    "MongoDB"
];

let fullStack = [...frontend, ...backend];

console.log(fullStack);


console.log("Task 19");

let student = [
    "Arun",
    "ECE",
    8.5,
    "Developer"
];

let [name, department, cgpa, role] = student;

console.log("Name:", name);
console.log("Department:", department);
console.log("CGPA:", cgpa);
console.log("Role:", role);


console.log("Task 20");

let company = {

    name: "Stackly",

    employee: {

        name: "Arun",

        role: "Developer",

        salary: 50000

    }

};

let {

    employee: {

        name: employeeName,

        role: employeeRole,

        salary: employeeSalary

    }

} = company;

console.log("Employee Name:", employeeName);
console.log("Role:", employeeRole);
console.log("Salary:", employeeSalary);


console.log("Final Challenge");

let students = [

    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },

    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },

    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }

];


function printStudents(studentList) {

    console.log("All Students");

    for (let { name, department, mark } of studentList) {

        console.log(name, "-", department, "-", mark);

    }

}

printStudents(students);



console.log("\nECE Students");

for (let { name, department } of students) {

    if (department === "ECE") {

        console.log(name);

    }

}


console.log("\nStudents Above 80");

for (let { name, mark } of students) {

    if (mark > 80) {

        console.log(name, "-", mark);

    }

}


let total = 0;

let highest = students[0].mark;

let lowest = students[0].mark;

for (let { mark } of students) {

    total += mark;

    if (mark > highest) {

        highest = mark;

    }

    if (mark < lowest) {

        lowest = mark;

    }

}

let average = total / students.length;

console.log("\nTotal Marks:", total);

console.log("Average Marks:", average);

console.log("Highest Mark:", highest);

console.log("Lowest Mark:", lowest);


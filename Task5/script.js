let name = "Arun";
let age = 21;
let department = "CSE";
let cgpa = 8.7;

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Department: " + department);
console.log("CGPA: " + cgpa);

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Department: ${department}`);
console.log(`CGPA: ${cgpa}`);

let a = 20;
let b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);


let userAge = Number(prompt("Enter your Age"));

if (userAge >= 18) {

    console.log("Eligible to vote");

} else {

    console.log("Not eligible to vote");

}


let mark = Number(prompt("Enter your Mark"));

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


let correctUsername = "admin";
let correctPassword = "1234";

let username = prompt("Enter Username");
let password = prompt("Enter Password");

if (username === correctUsername &&
    password === correctPassword) {

    console.log("Login Successful");

}
else if (username !== correctUsername &&
         password === correctPassword) {

    console.log("Invalid Username");

}
else if (username === correctUsername &&
         password !== correctPassword) {

    console.log("Invalid Password");

}
else {

    console.log("Invalid Credentials");

}


console.log("Task 6");

let balance = 10000;

let withdrawal = Number(prompt("Enter Withdrawal Amount"));

if (withdrawal <= 0) {

    console.log("Invalid Withdrawal Amount");

}
else if (withdrawal > balance) {

    console.log("Insufficient Balance");

}
else if (withdrawal % 100 !== 0) {

    console.log("Withdrawal amount should be a multiple of ₹100");

}
else {

    balance = balance - withdrawal;

    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ₹" + balance);

}


console.log("Task 7");

let num = Number(prompt("Enter a Number"));

for (let i = 1; i <= 10; i++) {

    console.log(num + " x " + i + " = " + (num * i));

}


console.log("Task 8");


let number = prompt("Enter a Number");

let reverse = "";

for (let i = number.length - 1; i >= 0; i--) {

    reverse += number[i];

}

console.log("Reversed Number:", reverse);


console.log("Task 9");

let correctOTP = 1234;

let attempts = 1;

while (attempts <= 3) {

    let enteredOTP = Number(prompt("Enter OTP"));

    if (enteredOTP === correctOTP) {

        console.log("OTP Verified");

        break;

    }
    else {

        console.log("Wrong OTP");

    }

    if (attempts === 3) {

        console.log("Account Blocked");

    }

    attempts++;

}


console.log("Task 10");

function calculateSalary(basicSalary, bonus) {

    return basicSalary + bonus;

}

let finalSalary = calculateSalary(30000, 5000);

console.log("Final Salary:", finalSalary);


console.log("Task 11");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Addition:", add(20, 10));
console.log("Subtraction:", subtract(20, 10));
console.log("Multiplication:", multiply(20, 10));
console.log("Division:", divide(20, 10));


console.log("Task 12");

function checkEligibility(age, height, weight) {

    if (age >= 21 && height >= 170 && weight >= 70) {

        return "Eligible";

    } else {

        return "Not Eligible";

    }

}

console.log(checkEligibility(25, 175, 75));
console.log(checkEligibility(20, 168, 65));



console.log("Task 13");

let cart = ["Laptop", "Mouse", "Keyboard"];

cart.push("Monitor");

let mouseIndex = cart.indexOf("Mouse");

if (mouseIndex !== -1) {

    cart.splice(mouseIndex, 1);

}

cart.unshift("Headset");

cart.pop();

console.log("Final Cart:");

console.log(cart);


console.log("Task 14");

let numbers = [10, 45, 23, 89, 12, 67];

let maximum = numbers[0];

for (let num of numbers) {

    if (num > maximum) {

        maximum = num;

    }

}

console.log("Largest Number:", maximum);


console.log("Task 15");

let values = [1, 2, 3, 2, 4, 1, 5];

let uniqueValues = [];

for (let value of values) {

    if (!uniqueValues.includes(value)) {

        uniqueValues.push(value);

    }

}

console.log("Original Array:");

console.log(values);

console.log("Array Without Duplicates:");

console.log(uniqueValues);



console.log("Task 16");

let employees = [

    {
        name: "Arun",
        salary: 30000
    },

    {
        name: "Bala",
        salary: 50000
    },

    {
        name: "Kumar",
        salary: 25000
    },

    {
        name: "Ravi",
        salary: 70000
    }

];

let highSalaryEmployees = employees.filter(function(employee) {

    return employee.salary >= 40000;

});

console.log("Employees with Salary >= 40000");

console.log(highSalaryEmployees);


console.log("Task 17");

let updatedEmployees = employees.map(function(employee) {

    if (employee.salary < 40000) {

        return {

            ...employee,

            salary: employee.salary + 5000

        };

    }

    else {

        return {

            ...employee,

            salary: employee.salary + 10000

        };

    }

});

console.log(updatedEmployees);


console.log("Task 18");

let totalSalary = employees.reduce(function(total, employee) {

    return total + employee.salary;

}, 0);

console.log("Total Salary:", totalSalary);


console.log("Task 19");

let salaryAboveOneLakh = employees.some(function(employee) {

    return employee.salary > 100000;

});

console.log("Anyone earning above ₹100000?");

console.log(salaryAboveOneLakh);

let minimumSalary = employees.every(function(employee) {

    return employee.salary >= 20000;

});

console.log("Everyone earning at least ₹20000?");

console.log(minimumSalary);


console.log("Task 20");

let employeeList = [

    {

        id: 101,
        name: "Arun",
        department: "IT",
        salary: 35000

    },

    {

        id: 102,
        name: "Bala",
        department: "HR",
        salary: 45000

    },

    {

        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 60000

    }

];

console.log("All Employee Names");

employeeList.forEach(function(employee) {

    console.log(employee.name);

});


console.log("IT Employees");

let itEmployees = employeeList.filter(function(employee) {

    return employee.department === "IT";

});

console.log(itEmployees);


console.log("Salary After 10% Increment");

let increasedSalary = employeeList.map(function(employee) {

    return {

        ...employee,

        salary: employee.salary + (employee.salary * 10 / 100)

    };

});

console.log(increasedSalary);


console.log("Employee with Salary ₹45000");

let employee45000 = employeeList.find(function(employee) {

    return employee.salary === 45000;

});

console.log(employee45000);


let companySalary = employeeList.reduce(function(total, employee) {

    return total + employee.salary;

}, 0);

console.log("Total Salary:", companySalary);


let above50000 = employeeList.some(function(employee) {

    return employee.salary > 50000;

});

console.log("Salary Above ₹50000:", above50000);


let above20000 = employeeList.every(function(employee) {

    return employee.salary > 20000;

});

console.log("Everyone earns above ₹20000:", above20000);


let sortedEmployees = [...employeeList];

sortedEmployees.sort(function(a, b) {

    return b.salary - a.salary;

});

console.log("Highest to Lowest Salary");

console.log(sortedEmployees);


console.log("Employee Name and Salary");

employeeList.forEach(function(employee) {

    let { name, salary } = employee;

    console.log(name, "-", salary);

});


let newEmployeeList = [...employeeList];

console.log("Copied Employee List");

console.log(newEmployeeList);

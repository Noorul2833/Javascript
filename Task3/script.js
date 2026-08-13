console.log("Task 1");

let employeeName = prompt("Enter Employee Name:");
let employeeAge = Number(prompt("Enter Age:"));
let experience = Number(prompt("Enter Experience (Years):"));
let salary = Number(prompt("Enter Salary:"));

if (employeeAge >= 21 && experience >= 1 && salary >= 20000) {
    console.log(employeeName + " is eligible.");
} else {

    console.log(employeeName + " is not eligible.");

    if (employeeAge < 21) {
        console.log("Reason: Age must be 21 or above.");
    }

    if (experience < 1) {
        console.log("Reason: Experience must be at least 1 year.");
    }

    if (salary < 20000) {
        console.log("Reason: Salary must be ₹20,000 or above.");
    }
}

console.log("Task 2");

let balance = 10000;
let withdrawAmount = Number(prompt("Enter Withdrawal Amount:"));

if (withdrawAmount > 0 &&
    withdrawAmount <= balance &&
    withdrawAmount % 100 === 0) {

    balance = balance - withdrawAmount;

    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ₹" + balance);

} else {

    if (withdrawAmount <= 0) {
        console.log("Invalid Amount");
    } else if (withdrawAmount > balance) {
        console.log("Insufficient Balance");
    } else {
        console.log("Amount should be multiple of 100");
    }

}

console.log("Task 3");

let correctUsername = "admin";
let correctPassword = "12345";

let attempt = 1;

while (attempt <= 3) {

    let username = prompt("Enter Username:");
    let password = prompt("Enter Password:");

    if (username === correctUsername &&
        password === correctPassword) {

        console.log("Login Successful");
        break;

    } else {

        console.log("Invalid Username or Password");

    }

    if (attempt === 3) {
        console.log("Account Locked");
    }

    attempt++;

}

console.log("Task 4");

let maths = Number(prompt("Math Marks:"));
let english = Number(prompt("English Marks:"));
let science = Number(prompt("Science Marks:"));
let social = Number(prompt("Social Marks:"));
let computer = Number(prompt("Computer Marks:"));

let total = maths + english + science + social + computer;
let average = total / 5;

console.log("Total:", total);
console.log("Average:", average);

if (average >= 90) {
    console.log("Grade: A");
}
else if (average >= 80) {
    console.log("Grade: B");
}
else if (average >= 70) {
    console.log("Grade: C");
}
else if (average >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}


console.log("Task 5");



console.log("Pattern 1");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


console.log("Pattern 2");

let i = 5;

while (i >= 1) {
    console.log(i);
    i--;
}


console.log("Pattern 3");

let j = 1;

do {
    document.write(j + " ");
    j++;
}
while (j <= 5);

document.write("<br><br>");


console.log("Task 6");

let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];

let prices = [
    50000,
    1000,
    2000,
    15000
];

let totalPrice = 0;

for (let k = 0; k < products.length; k++) {

    console.log(products[k] + " - ₹" + prices[k]);

    totalPrice += prices[k];

}

console.log("Total = ₹" + totalPrice);


console.log("Task 7");

let employee = {

    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000

};

for (let key in employee) {

    console.log(key + " : " + employee[key]);

}


function calculateBonus(salary) {

    if (salary >= 40000) {
        return 5000;
    }

    return 3000;

}

console.log("Bonus = ₹" + calculateBonus(employee.salary));


console.log("Task 8");

function deposit(balance, amount) {

    balance = balance + amount;

    console.log("Deposited: ₹" + amount);

    return balance;

}

function withdraw(balance, amount) {

    if (amount <= balance) {

        balance = balance - amount;

        console.log("Withdrawn: ₹" + amount);

    }
    else {

        console.log("Insufficient Balance");

    }

    return balance;

}

function checkBalance(balance) {

    console.log("Current Balance: ₹" + balance);

}

let currentBalance = 10000;

currentBalance = deposit(currentBalance, 5000);

currentBalance = withdraw(currentBalance, 2000);

checkBalance(currentBalance);


console.log("Task 9");

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calculate(callback, a, b) {

    return callback(a, b);

}

console.log(calculate(add, 20, 10));
console.log(calculate(sub, 20, 10));
console.log(calculate(mul, 20, 10));
console.log(calculate(div, 20, 10));


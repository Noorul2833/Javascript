console.log("Task 1");

const collegeName = "Jain College";
let studentName = "Noorul Ameen";
var studentAge = 23;

console.log("College:", collegeName);
console.log("Student:", studentName);
console.log("Age:", studentAge);

console.log("\n Task 2");

let price = 25000;
price = 27000;

console.log("Updated Price:", price);

console.log("\n Task 3 ");

const company = "Stackly";
console.log(company);

//company = "TCS";


console.log("\n Task 4");

console.log("Login Successful");
console.warn("Password is Weak");
console.error("Network Error");

console.log("\n Task 5 ");

let myName = "Noorul Ameen";
let myAge = 23;
let isDeveloper = true;
let address;

console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(isDeveloper, typeof isDeveloper);
console.log(address, typeof address);


console.log("\n Task 6");

let cart = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Headset",
    "Monitor"
];

console.log("First Product:", cart[0]);
console.log("Third Product:", cart[2]);
console.log("Last Product:", cart[cart.length - 1]);

console.log("\n Task 7");

let movies = [
    "Leo",
    "Master",
    "Vikram",
    "Kaithi",
    "DC",
    "Jailer"
];

console.log("2nd Movie:", movies[1]);
console.log("5th Movie:", movies[4]);
console.log("Last Movie:", movies[movies.length - 1]);

console.log("\n Task 8");

let employee = {
    name: "Noorul",
    age: 28,
    department: "IT",
    skills: ["Java", "SQL", "HTML"],
    salary: 50000
};

console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("First Skill:", employee.skills[0]);
console.log("Salary:", employee.salary);

console.log("\n Task 9");

let product = {
    productName: "Smartphone",
    brand: "Samsung",
    price: 30000,
    colors: ["Black", "Blue", "Silver"]
};

console.log("Brand:", product.brand);
console.log("Price:", product.price);
console.log("Second Color:", product.colors[1]);

console.log("\n Task 10");

let num1 = 20;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponent:", num1 ** num2);

console.log("\n Task 11");

let a = 5;

a++;
console.log("After a++ :", a);

++a;
console.log("After ++a :", a);

a--;
console.log("After a-- :", a);

--a;
console.log("After --a :", a);

console.log("\n Task 12");

let a1 = 10;

let b1 = a1++;

let c1 = ++b1;

console.log(a1);
console.log(b1);
console.log(c1);

console.log("\n Task 13");

let x = 7;

let y = --x;

let z = y++;

console.log(x);
console.log(y);
console.log(z);

console.log("\n Task 14");

let school = {
    schoolName: "YRTV mat hr sec School",
    principal: "Mr. Kumar",
    totalStudents: 1200,
    classes: [
        "1st",
        "2nd",
        "3rd",
        "4th",
        "5th"
    ]
};

console.log("School:", school.schoolName);
console.log("Principal:", school.principal);
console.log("Last Class:", school.classes[school.classes.length - 1]);

console.log("\n Task 15 ");

let groceries = [
    "Rice",
    "Sugar",
    "Milk",
    "Eggs",
    "Bread",
    "Oil",
    "Salt",
    "Tea"
];

console.log("First Item:", groceries[0]);
console.log("Fourth Item:", groceries[3]);
console.log("Last Item:", groceries[groceries.length - 1]);



console.log("\n Task 16");

let username = "noorul2833";
let email = "noorul@gmail.com";
let age = 23;
let isPremium = true;

console.log(username, typeof username);
console.log(email, typeof email);
console.log(age, typeof age);
console.log(isPremium, typeof isPremium);

console.log("\n Task 17");

var city = "Sivakasi";
let state = "Tamil Nadu";
const country = "India";

city = "Madurai";
state = "Kerala";

console.log(city);
console.log(state);
console.log(country);

//country = "USA";


var city = "Coimbatore";

//let state = "Goa";

//const country = "Canada";

console.log(city);

console.log("\n Task 18");

let tamil = 85;
let english = 90;
let maths = 95;

let total = tamil + english + maths;
let average = total / 3;

console.log("Total:", total);
console.log("Average:", average);

console.log("\n  Task 19");

let companyDatabase = {
    company: "Stackly",
    employees: [
        "Noorul",
        "Harrish",
        "Basith",
        "Aadith"
    ],
    location: "Bangalore",
    foundedYear: 2000,
    CEO: "Ram"
};

console.log("CEO:", companyDatabase.CEO);
console.log("Location:", companyDatabase.location);
console.log("First Employee:", companyDatabase.employees[0]);

console.log("\n Task 20");

let profile = {
    name: "Noorul Ameen",
    city: "Sivakasi",
    hobbies: [
        "Travelling",
        "Coding",
        "Cricket"
    ],
    age: 23
};

console.log("Name:", profile.name);
console.log("Second Hobby:", profile.hobbies[1]);
console.log("Age:", profile.age);

console.log("TASK 1");

let studentName = "Noorul Ameen";
const course = "MCA";
var age = 23;
let mark = 85;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Course:", course);
console.log("Mark:", mark);


console.log("TASK 2");

let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

console.log("Name:", userName);
alert("Your age is: " + userAge);


console.log("TASK 3");

let stringValue = "JavaScript";
let numberValue = 100;
let booleanValue = true;
let undefinedValue;
let nullValue = null;

console.log("String:", stringValue, typeof stringValue);
console.log("Number:", numberValue, typeof numberValue);
console.log("Boolean:", booleanValue, typeof booleanValue);     
console.log("Undefined:", undefinedValue, typeof undefinedValue);
console.log("Null:", nullValue, typeof nullValue);


console.log("TASK 4");

let shoppingList = [
    "Shirt",
    "Pant",
    "Shoes",
    "Watch",
    "Bag",
    "Cap"
];

console.log("First Product:", shoppingList[0]);
console.log("Third Product:", shoppingList[2]);
console.log("Last Product:", shoppingList[shoppingList.length - 1]);
console.log("Complete Array:", shoppingList);


console.log("TASK 5");

let employee = {
    name: "Noorul",
    age: 23,
    role: "Full Stack Developer",
    salary: 50000
};

console.log("Name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("Salary:", employee.salary);


console.log("TASK 6");

let productPrice = 500;
let quantity = 3;

let totalPrice = productPrice * quantity;
let discount = 100;
let finalAmount = totalPrice - discount;

console.log("Product Price:", productPrice);
console.log("Quantity:", quantity);
console.log("Total Price:", totalPrice);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);


console.log("Addition:", productPrice + quantity);
console.log("Division:", totalPrice / quantity);


console.log("TASK 7");

console.log(25 > 20);
console.log(15 < 10);
console.log(50 == "50");
console.log(50 === "50");
console.log(100 != "100");
console.log(100 !== "100");


console.log("TASK 8");


console.log(10 > 5 && 20 > 15 || 5 > 10);

console.log(10 < 5 || 20 >= 20 && 5 == "5");

console.log(15 === "15" || 10 > 5 && 8 < 3);

console.log(20 >= 20 && 5 !== "5" || 10 < 5);

console.log(25 < 20 || 30 == "30" && 10 >= 10);


console.log("TASK 9");

let passwordCorrect = true;

let loginMessage = passwordCorrect
    ? "Login successful"
    : "Invalid password";

console.log(loginMessage);


console.log("TASK 10");

let mark1 = "80";
let mark2 = "70";

let convertedMark1 = Number(mark1);
let convertedMark2 = Number(mark2);

let totalMarks = convertedMark1 + convertedMark2;

console.log("Mark 1:", convertedMark1);
console.log("Mark 2:", convertedMark2);
console.log("Total:", totalMarks);


console.log("TASK 11");

let votingAge = 20;

if (votingAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


console.log("TASK 12");

let studentMark = 85;

if (studentMark > 100 || studentMark < 0) {
    console.log("Invalid Mark");
} else if (studentMark >= 90) {
    console.log("A Grade");
} else if (studentMark >= 75) {
    console.log("B Grade");
} else if (studentMark >= 50) {
    console.log("C Grade");
} else {
    console.log("Fail");
}


console.log("TASK 13");

let time = 15;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Good Morning");
} else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");
} else if (time >= 16 && time <= 19) {
    console.log("Good Evening");
} else if (time >= 20 && time <= 24) {
    console.log("Good Night");
} else {
    console.log("Invalid Time");
}


console.log("TASK 14");

let candidateAge = 25;
let height = 175;
let weight = 75;

if (candidateAge >= 21) {

    if (height >= 170) {

        if (weight >= 70) {
            console.log("Candidate is eligible");
        } else {
            console.log("Candidate is not eligible");
            console.log("Reason: Weight must be 70 kg or above");
        }

    } else {
        console.log("Candidate is not eligible");
        console.log("Reason: Height must be 170 cm or above");
    }

} else {
    console.log("Candidate is not eligible");
    console.log("Reason: Age must be 21 or above");
}

console.log("TASK 15");

let trafficLight = "green";

switch (trafficLight) {

    case "red":
        console.log("Stop the vehicle");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light");
}

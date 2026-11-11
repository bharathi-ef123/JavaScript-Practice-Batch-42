// JavaScript Practice Task
// Name: BHARATHRAJ G
// Batch Number: 42
// Designation: Frontend Developer
// PART 1: PRIMITIVE DATA TYPES
// Task 1
var studentName = "BHARATHRAJ G";
console.log(typeof studentName);
// Task 2
let employeeAge = 22; // Change this to your actual age
console.log(typeof employeeAge);
// Task 3
let isWorking = true;
console.log(typeof isWorking);
// Task 4
let employeeCity;
console.log(employeeCity);
// Task 5
let name = "Bharathraj";
let age = 22;
let isAvailable = true;
let jobRole;
let result = null;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isAvailable);
console.log(typeof jobRole);
console.log(typeof result);
// Task 6
let courseName = "JavaScript";
console.log(courseName);
// Task 7
let batchNumber = 42;
console.log(typeof batchNumber);
// PART 2: ARRAYS
// Task 8
let fruits = ["Kiwi", "Guava", "Peach", "Dragon Fruit", "Pomegranate"];
console.log(fruits);
// Task 9
console.log(fruits[0]);
// Task 10
console.log(fruits[2]);
// Task 11
console.log(fruits[fruits.length - 1]);
// Task 12
let employeeDetails = ["Bharathraj", 22, "Salem", "Frontend Developer"];
// Task 13
console.log(employeeDetails[0]);
console.log(employeeDetails[1]);
console.log(employeeDetails[2]);
console.log(employeeDetails[3]);
// Task 14
let mixedArray = ["JavaScript", 42, true, "Stackly"];
// Task 15
console.log(mixedArray.length);
// Task 16
let mobileBrands = ["Samsung", "Apple", "OnePlus", "Vivo", "Realme"];
// Task 17
console.log(mobileBrands[1]);
// Task 18
let programmingLanguages = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Java",
    "PHP"
];
// Task 19
console.log(programmingLanguages[programmingLanguages.length - 1]);
// PART 3: OBJECTS
// Task 20
let student = {
    name: "Bharathraj",
    age: 22,
    city: "Salem"
};
// Task 21
console.log(student.name);
console.log(student.age);
// Task 22
let employee = {
    name: "Arun",
    salary: 35000,
    designation: "Web Developer"
};
console.log(employee);
// Task 23
let developer = {
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"]
};
console.log(developer.skills[2]);
// Task 24
let product = {
    fruit: "Apple",
    number: 25,
    available: true,
    toy: "Car"
};
console.log(product.toy);
// Task 25
let company = {
    companyName: "Stackly",
    location: "Chennai",
    employeeCount: 150
};
console.log(company);
// PART 4: ARITHMETIC OPERATORS
// Task 26
let numberOne = 20;
let numberTwo = 10;
console.log(numberOne + numberTwo);
// Task 27
console.log(numberOne - numberTwo);
// Task 28
console.log(5 * 4 * 2);
// Task 29
console.log(100 / 5);
// Task 30
console.log(25 % 4);
// Task 31
console.log(3 ** 4);
// Task 32
let firstNumber = 15;
let secondNumber = 4;
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);
console.log(firstNumber ** secondNumber);
// PART 5: INCREMENT AND DECREMENT
// Pre-increment
let preIncrementValue = 10;
console.log(++preIncrementValue);
// Post-increment
let postIncrementValue = 20;
console.log(postIncrementValue++);
console.log(postIncrementValue);
// Pre-decrement
let preDecrementValue = 30;
console.log(--preDecrementValue);
// Post-decrement
let postDecrementValue = 40;
console.log(postDecrementValue--);
console.log(postDecrementValue);
// TASK 38: PREDICT THE OUTPUT
let a = 10;
let b = a++;
console.log(a);
console.log(b);
// TASK 39: PREDICT THE OUTPUT
let x = 15;
let y = ++x;
console.log(x);
console.log(y);
// TASK 40: PREDICT THE FINAL VALUES
let num1 = 25;
let num2 = --num1;
let num3 = num2++;
let num4 = ++num3;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
// Assignment 3: Callback-Based Utility System


// Q1. Create processArray() function

function processArray(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}


// Q2. Square every number in an array

let numbers = [1, 2, 3, 4, 5];

let square = processArray(numbers, function(n) {
    return n * n;
});

console.log("Square of Numbers:", square);


// Q3. Return only even numbers

function getEvenNumbers(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

let even = getEvenNumbers(numbers, function(n) {
    return n % 2 === 0;
});

console.log("Even Numbers:", even);


// Q4. Create processString() function

function processString(str, callback) {
    return callback(str);
}


// Q5. Convert string into uppercase

let message = "hello world";

let upper = processString(message, function(str) {
    return str.toUpperCase();
});

console.log("Uppercase String:", upper);


// Q6. Count words in a sentence

let sentence = "JavaScript is a very useful language";

let count = processString(sentence, function(str) {
    return str.trim().split(/\s+/).length;
});

console.log("Total Words:", count);


// Q7. Create calculate() function

function calculate(a, b, callback) {
    return callback(a, b);
}


// Q8. Addition, Subtraction, Multiplication and Division

let add = calculate(10, 5, function(a, b) {
    return a + b;
});

let subtract = calculate(10, 5, function(a, b) {
    return a - b;
});

let multiply = calculate(10, 5, function(a, b) {
    return a * b;
});

let divide = calculate(10, 5, function(a, b) {
    return a / b;
});

console.log("Addition:", add);
console.log("Subtraction:", subtract);
console.log("Multiplication:", multiply);
console.log("Division:", divide);


// Q9. Find first element satisfying a condition

function findElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}

let found = findElement(numbers, function(n) {
    return n > 3;
});

console.log("First Element Greater Than 3:", found);
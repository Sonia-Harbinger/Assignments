// question 1: Create a TypeScript function that takes either a string or a number as a parameter. Use a union type to define the parameter.
function unionType(param) {
    if (typeof param === 'string') {
        console.log("The parameter is a string");
    }
    else if (typeof param === 'number') {
        console.log("The parameter is a number");
    }
}
unionType("Hello");
unionType(123);
var person = {
    name: 'Sonia',
    email: 'abc@example.com',
    phone: 1234567890
};
console.log(person);
var data = {
    name: 'Sonia',
    age: 25,
    address: {
        city: 'Pune',
        state: 'Maharashtra'
    }
};
console.log(data);
//question 4
// Define an enum for days of the week. Create a function that takes a day as a parameter and logs a message based on the day
var Days;
(function (Days) {
    Days["Sunday"] = "Sunday";
    Days["Monday"] = "Monday";
    Days["Tuesday"] = "Tuesday";
    Days["Wednesday"] = "Wednesday";
    Days["Thursday"] = "Thursday";
    Days["Friday"] = "Friday";
    Days["Saturday"] = "Saturday";
})(Days || (Days = {}));
function printDay(day) {
    switch (day) {
        case Days.Sunday:
            console.log('Today is Sunday');
            break;
        case Days.Monday:
            console.log('Today is Monday');
            break;
        case Days.Tuesday:
            console.log('Today is Tuesday');
            break;
        case Days.Wednesday:
            console.log('Today is Wednesday');
            break;
        case Days.Thursday:
            console.log('Today is Thursday');
            break;
        case Days.Friday:
            console.log('Today is Friday');
            break;
        case Days.Saturday:
            console.log('Today is Saturday');
            break;
    }
}
printDay(Days.Sunday);
//question 5
// Use type assertions to convert a variable from one type to another. Explain why you chose type 
// assertions over other options.
var value = 'Hello';
var strlength = value.length;
console.log(strlength);
//question 6
// Create a generic function that takes an array and returns the first element. Use the function with arrays 
// of different types
function getFirstElement(arr) {
    return arr[0];
}
// Array of numbers
var numbers = [];
var firstNumber = getFirstElement(numbers);
console.log(firstNumber); // Output: 1
// Array of strings
var strings = ["apple", "banana", "cherry"];
var firstString = getFirstElement(strings);
console.log(firstString); // Output: "apple"
// Array of objects
var objects = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
var firstObject = getFirstElement(objects);
console.log(firstObject); // Output: { name: "Alice" }
var person1 = {
    name: 'Sonia'
};
console.log(person1);
// Usage examples
var test1 = "Array";
var test2 = "Not Array"; // "Not Array"
console.log(test1);
console.log(test2);
var config = {
    apiUrl: "https://example.com/api",
    retries: 3,
};
console.log(config);
//question 10
//  Write a function that infers the return type based on the input type. For example, if the input is a string, the function returns a number; if it's an array, it returns a boolean.
function inferType(input) {
    if (typeof input === "string") {
        return 42; // If it's a string, return a number
    }
    return true; // Otherwise, return a boolean
}
var result1 = inferType("hello"); // Returns a number (42)
var result2 = inferType([1, 2, 3]); // Returns a boolean (true)
console.log(result1);
console.log(result2);
//question 11
// Create a namespace that encapsulates a set of functions related to mathematical operations.Demonstrate how to use the namespace in another file.
var MathOperations;
(function (MathOperations) {
    function add(x, y) {
        return x + y;
    }
    MathOperations.add = add;
    function subtract(x, y) {
        return x - y;
    }
    MathOperations.subtract = subtract;
})(MathOperations || (MathOperations = {}));
var sum = MathOperations.add(10, 5);
console.log(sum); // Output: 15
//question 12
// Define two function types, one representing a function that takes a number and another that takes a string. Create a new type that represents the intersection of these two function types
///<reference path="typescript_assignment.ts" />
var sums = MathOperations.add(10, 5);
console.log(sums); // Output: 15
var difference = MathOperations.subtract(10, 5);
console.log(difference); // Output: 5

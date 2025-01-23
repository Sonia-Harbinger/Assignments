// question 1: Create a TypeScript function that takes either a string or a number as a parameter. Use a union type to define the parameter.

console.log("1st question output:...........");

function unionType(param: string | number) {
    if (typeof param === 'string') {
        console.log("The parameter is a string");
    } else if (typeof param === 'number') {
        console.log("The parameter is a number");
    }
}
unionType("Hello");
unionType(123);



console.log("2nd question output:...........");

// question 2: Define two interfaces, one with properties for a person's name and another with properties for their contact information. Create a new interface using intersection to combine both.
interface PersonInfo {
    name: string;
}

interface ContactInfo {
    email: string;
    phone: number;
}

type PersonContact = PersonInfo & ContactInfo;

let person: PersonContact = {
    name: 'Sonia',
    email: 'abc@example.com',
    phone: 1234567890
};
console.log(person);




console.log("3rd question output:...........");

// question 3: Create a type alias for a complex data structure, such as a nested object or an array of objects
type ComplexData = {
    name: string;
    age: number;
    address: {
        city: string;
        state: string;
    }
}

let data: ComplexData = {
    name: 'Sonia',
    age: 25,
    address: {
        city: 'Pune',
        state: 'Maharashtra'
    }
}
console.log(data);



console.log("4th question output:...........");

// question 4: Define an enum for days of the week. Create a function that takes a day as a parameter and logs a message based on the day
enum Days {
    Sunday = 'Sunday',
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday'
}

function printDay(day: Days) {
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



console.log("5th question output:...........");

// question 5: Use type assertions to convert a variable from one type to another. Explain why you chose type assertions over other options.
let value: any = 'Hello';
let strlength: number = (value as string).length;
console.log(strlength);



console.log("6th question output:...........");


// question 6: Create a generic function that takes an array and returns the first element. Use the function with arrays of different types
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers);
console.log(firstNumber); // Output: 1

// Array of strings
const strings = ["apple", "banana", "cherry"];
const firstString = getFirstElement(strings);
console.log(firstString); // Output: "apple"

// Array of objects
const objects = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
const firstObject = getFirstElement(objects);
console.log(firstObject); // Output: { name: "Alice" }



console.log("7th question output:...........");


// question 7: Create a mapped type that converts all properties of an interface to be optional. Apply this mapped type to an existing interface.
interface Person {
    name: string;
    age: number;
    address: string;
}

type OptionalPerson = {
    [P in keyof Person]?: Person[P];
}

let person1: OptionalPerson = {
    name: 'Sonia'
};
console.log(person1);


console.log("8th question output:...........");


// question 8: Create a conditional type that checks if a type is an array.
type IsArray<T> = T extends any[] ? "Array" : "Not Array";

// Usage examples
let test1: IsArray<number[]> = "Array";
let test2: IsArray<string> = "Not Array";  // "Not Array"
console.log(test1);
console.log(test2);




console.log("9th question output:...........");

// question 9: Create an interface representing a configuration object. Use Readonly to make the properties immutable and Partial to allow for partial updates.
interface Config {
    apiUrl: string;
    retries: number;
    timeout: number;
}

type ImmutableConfig = Readonly<Config>; // All properties are immutable
type PartialConfig = Partial<Config>; // All properties are optional

let config: PartialConfig = {
    apiUrl: "https://example.com/api",
    retries: 3,
};
console.log(config);




console.log("10th question output:...........");

// question 10: Write a function that infers the return type based on the input type. For example, if the input is a string, the function returns a number; if it's an array, it returns a boolean.
function inferType<T>(input: T): T extends string ? number : boolean {
    if (typeof input === "string") {
        return 42 as any; // If it's a string, return a number
    }
    return true as any; // Otherwise, return a boolean
}

const result1 = inferType("hello"); // Returns a number (42)
const result2 = inferType([1, 2, 3]); // Returns a boolean (true)
console.log(result1);
console.log(result2);




console.log("11th question output:...........");

// question 11: Create a namespace that encapsulates a set of functions related to mathematical operations. Demonstrate how to use the namespace in another file.
namespace MathOperations {
    export function add(x: number, y: number): number {
        return x + y;
    }
    export function subtract(x: number, y: number): number {
        return x - y;
    }
}

const sum = MathOperations.add(10, 5);
console.log(sum); // Output: 15




console.log("12th question output:...........");

// question 12: Define two function types, one representing a function that takes a number and another that takes a string. Create a new type that represents the intersection of these two function types.
type NumberFunc = (x: number) => void;
type StringFunc = (x: string) => void;

type CombinedFunc = NumberFunc & StringFunc;

const combined: CombinedFunc = (x: any) => {
    if (typeof x === "number") {
        console.log("Number:", x);
    } else if (typeof x === "string") {
        console.log("String:", x);
    }
};

combined(42);
combined("Hello");
console.log(combined);



console.log("13th question output:...........");


// question 13: Define two interfaces representing different types of objects. Create a new type that represents the union of these two object types.
interface Dog {
    breed: string;
    bark: () => void;
}

interface Cat {
    breed: string;
    meow: () => void;
}

type Animal = Dog | Cat;

const animal: Animal = {
    breed: "Labrador",
    bark: () => console.log("Woof"),
};

console.log(animal.breed);





console.log("14th question output:...........");

// question 14: Define an interface with several properties. Use the keyof keyword to create a type that represents the keys of the interface.
interface Person2 {
    name: string;
    age: number;
}

type PersonKeys = keyof Person2;  // "name" | "age"

const key: PersonKeys = "name";
console.log(key);  // "name"




console.log("15th question output:...........");

// question 15: Write a function that checks if a variable is of a certain type using a type guard. Use this function to conditionally handle different types.
function isString(value: any): value is string {
    return typeof value === "string";
}

const result3 = isString("Hello");  // true
const result4 = isString(123);     // false
console.log(result3);




console.log("16th question output:...........");

// question 16: Create an interface representing a dictionary with a dynamic set of keys and values. Use an index signature to define the type.
interface Dictionary {
    [key: string]: string;
}

const dict: Dictionary = {
    hello: "world",
    name: "Alice",
};
console.log(dict);



console.log("17th question output:...........");

// question 17: Define a tuple type representing a person's information, including name, age, and address.
type EmployeesInfo = [string, number, string];

const Employees: EmployeesInfo = ["John", 30, "New York"];
console.log(Employees);



console.log("18th question output:...........");

// question 18: Create a function that takes a parameter and allows it to be either a string or null/undefined. Handle both cases in the function.
function handleInput(input: string | null | undefined): void {
    if (input) {
        console.log("Input:", input);
    } else {
        console.log("No input provided.");
    }
}

handleInput("Hello");
handleInput(null);
handleInput(undefined);


console.log("19th question output:...........");

// question 19: Write a TypeScript function without explicitly specifying the types. Allow TypeScript to infer the types based on the function implementation.
function add(a, b) {
    return a + b;
}

console.log(add(1, 2));  // Inferred as number
console.log(add("a", "b"));  // Inferred as string



console.log("20th question output:...........");


// question 20: Create an object with properties representing a person's information. Use the object spread syntax to create a new object with additional properties.
const person2 = { name: "Alice", age: 25 };
const extendedPerson = { ...person2, address: "123 Main St" };

console.log(extendedPerson);  // { name: "Alice", age: 25, address: "123 Main St" }
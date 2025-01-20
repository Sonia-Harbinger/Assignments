//TASK 1


// Create a function named multiplyByTwo that takes a number as input and multiplies it by 2.
// Instead of directly returning the result, this function should invoke a callback function with the
// calculated value as an argument.

function multiplyByTwo(num, callback) {
let result = num *2; //multiplying number by 2
callback(result); //invoking callback function
}
function usingCallback(result){
    console.log(result); //displaying result
}




//TASK 2
// Use the built-in fs (File System) module to read the contents of a file named "data.txt."
// Create a function named readFileContents that takes a filename and a callback function as
// parameters. Inside the function, read the file contents asynchronously using fs.readFile and pass
// the contents to the callback function.

const fs = require('fs');

function readFileContents(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(data);
    });
}

readFileContents('data.txt',(callback)=>
{
    console.log("2nd task called",callback);
}
);




//TASK 3

// Create a function named sumArray that takes an array of numbers as input and returns a
// Promise. The Promise should resolve with the sum of all the numbers in the array.
// Create a function named squareArray that takes an array of numbers as input and returns a
// Promise. The Promise should resolve with a new array containing the square of each number in
// the input array
function sumArray(arr){
    return new Promise((resolve, reject)=>{
        let sum= 0;
        if(arr.length<=0)
        {
            reject("Array does not contain elements");
        }
        else{
            for(let i=0;i<arr.length;i++)
            {
                sum = sum + arr[i];
            }
            resolve(sum);
        }
    })
};
function squareArray(arr){
    return new Promise((resolve, reject)=>{
        let sqr=[];
        if(arr.length<= 0)
        {
            reject("Array does not contain elements");
        }
        else{
            for(let i=0;i<arr.length;i++)
            {
                sqr.push(arr[i]*arr[i]);
            }
            resolve(sqr);
        }
    }
    )
}

//TASK 4

// Refactor the readFileContents function from Task 2 to use async/await. The function should now
// return the file contents instead of using a callback.

const fs_2 = require('fs').promises;

async function readFileContent(filename) {
    try {
        const data = await fs_2.readFile(filename, 'utf8');
        return data;
    } catch (err) {
        throw err; // Handling error
    }
}

// TASK 5
// Use multiplyByTwo function from Task 1 to multiply a given number by 2 and display the result
// using console.log.
// Use the readFileContents function from Task 2 to read the contents of "data.txt" and display the
// contents using console.log.
// Use the sumArray function from Task 3 to find the sum of an array of numbers and display the
// result using console.log.
// Use the squareArray function from Task 3 to square an array of numbers and display the resulting
// squared array using console.log.
// Test the refactored readFileContents function from Task 4 and display the file contents using
// console.log.

multiplyByTwo(5, usingCallback); //calling function of task 1


readFileContents('data.txt',(data)=>{
    console.log(data);
}); //calling function of task 2




sumArray([1,2,3,4,5])
.then(result=>console.log(result))
.catch(error=>console.log(error));


squareArray([1,2,3,4,5])
.then(result=>console.log(result))
.catch(error=>console.log(error));
 //calling function of task 3


 readFileContent('data.txt')
 .then(data => console.log('File contents:', data))
 .catch(err => console.error('Error reading file:', err));
 //calling function of task 4



//BONUS TASK
function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

delay(2000).then(() => {
    console.log('Resolved after 2 seconds');
});
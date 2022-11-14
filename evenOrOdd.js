// Write a JavaScript program to check whether a number is even or odd using if else. How to check whether a number is even or odd using if else in JavaScript program. JavaScript Program to input a number from user and check whether the given number is even or odd. Logic to check even and odd number using if...else in JavaScript programming.

// Example
// Input
// Input number: 10
// Output

// 10 is even number

function inputNumber(num){
    if(num % 2 == 0)
        console.log(num + " is even number");
    else
        console.log(num + " is odd number");
}

inputNumber(10);
inputNumber(5);
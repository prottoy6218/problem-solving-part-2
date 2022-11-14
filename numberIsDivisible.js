// Write a program to check whether a number is divisible by 5 and 11 or not using if else. How to check divisibility of any number in javascript programming. javascript program to enter any number and check whether it is divisible by 5 and 11 or not. Logic to check divisibility of a number in javascript program.
// Example
// Input
// Input number: 55
// Output

// Number is divisible by 5 and 11

function inputNumber(num){
    if((num % 5 == 0) && (num % 11 == 0))
        console.log("Number is divisible by 5 and 11");
    else
        console.log("Number is not divisible by 5 and 11");
}

inputNumber(55);
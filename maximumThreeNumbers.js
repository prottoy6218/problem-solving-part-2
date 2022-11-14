// Write a program to find maximum between three numbers using ladder if else or nested if. 
// Example
// Input
// Input num1: 10
// Input num2: 20
// Input num3: 15
// Output

// Maximum is: 20

function inputNumber(num1, num2, num3){
    if((num1 > num2) && (num1 > num3))
        console.log("Maximum is: " + num1);
    else if((num2 > num1) && (num2 > num3))
        console.log("Maximum is: " + num2);
    else
        console.log("Maximum is: " + num3);
}

inputNumber(10, 20, 15);
inputNumber(30, 20, 15);
inputNumber(30, 20, 60);
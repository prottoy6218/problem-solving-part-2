// Write a JavaScript program to enter month number between(1-12) and print number of days in month using if else. How to print number of days in a given month using if else in JavaScript programming. Logic to find number of days in a month in JavaScript program.

// Example
// Input
// Enter month number: 1
// Output

// It contains 31 days.

function daysInMonth(enterMonth){
    if(enterMonth == 1)
        console.log("It contains 31 days.");
    else if(enterMonth == 2)
        console.log("It contains 28 or 29 days.");
    else if(enterMonth == 3)
        console.log("It contains 31 days.");
    else if(enterMonth == 4)
        console.log("It contains 30 days.");
    else if(enterMonth == 5)
        console.log("It contains 31 days.");
    else if(enterMonth == 6)
        console.log("It contains 30 days.");
    else if(enterMonth == 7)
        console.log("It contains 31 days.");
    else if(enterMonth == 8)
        console.log("It contains 31 days.");
    else if(enterMonth == 9)
        console.log("It contains 30 days.");
    else if(enterMonth == 10)
        console.log("It contains 31 days.");
    else if(enterMonth == 11)
        console.log("It contains 30 days.");
    else if(enterMonth == 12)
        console.log("It contains 31 days.");
    else
        console.log("Invalid input! Please enter month number between (1-12).");
}

daysInMonth(2);
daysInMonth(10);
daysInMonth(15);
// Write a JavaScript program to check leap year using if else. How to check whether a given year is leap year or not in JavaScript programming. JavaScript Program to input year from user and check whether the given year is leap year or not using ladder if else. Logic to check leap year in JavaScript programming.

// Example
// Input
// Input year: 2004
// Output

// 2004 is leap year.

function inputYear(year){
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
        console.log(year + " is leap year");
    else
        console.log(year + " is common year");
}

inputYear(2005);
inputYear(2004);
inputYear(2008);
// Write a JavaScript program to input week number(1-7) and print the corresponding day of week name using if else. How to print day of week using if else in JavaScript programming. Logic to convert week number to day of week in JavaScript programming.

// Example
// Input
// Input week number: 1
// Output

// Monday

function dayOfWeek(day){
    if( day == 1)
        console.log('Monday');
    else if( day == 2)
        console.log('Tuesday');
    else if( day == 3)
        console.log('Wednesday');
    else if( day == 4)
        console.log('Thursday');
    else if( day == 5)
        console.log('Friday');
    else if( day == 6)
        console.log('Saturday');
    else if( day == 7)
        console.log('Sunday');
    else
        console.log('Invalid Input! Please enter week number between 1-7.');
}

dayOfWeek(5);
dayOfWeek(10);
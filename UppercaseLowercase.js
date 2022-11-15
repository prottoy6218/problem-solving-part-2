// Write a JavaScript program to input character from user and check whether character is uppercase or lowercase alphabet using if else. How to check uppercase and lowercase using if else in JavaScript programming. Logic to check uppercase and lowercase alphabets in JavaScript program.

// Example
// Input
// Input character: C
// Output

// 'C' is uppercase alphabet

function inputcharacter(ch){
    if(ch >= 'A' && ch <= 'Z')
        console.log(ch + ' is uppercase alphabet');
    else
        console.log(ch + ' is lowercase alphabet');
}

inputcharacter('F');
inputcharacter('p');
// Write a JavaScript program to input a character from user and check whether given character is alphabet, digit or special character using if else. How to check if a character is alphabet, digits or any other special character using if else in JavaScript programming. Logic to check alphabet, digit or special character in JavaScript programming.

// Example
// Input
// Input any character: 3
// Output

// 3 is digit

function inputCharacterOrNumber(ch){
    if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
        console.log(ch + ' is character');

    else if(ch >= 0 || ch <= 0)
        console.log(ch + ' is digit');
    
    else
        console.log(ch +  ' is special character');
}

inputCharacterOrNumber('m');
inputCharacterOrNumber('H');
inputCharacterOrNumber(15000);
inputCharacterOrNumber(-100000);
inputCharacterOrNumber('$')
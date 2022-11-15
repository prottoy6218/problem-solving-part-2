// Write a JavaScript program to input a character from user and check whether the given character is alphabet or not using if else. How to check whether a character is alphabet or not in JavaScript programming. Logic to check if a character is alphabet or not in JavaScript program.
// Example
// Input
// Input character: a
// Output

// 'a' is alphabe

function inputCharacter(ch){
    if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
        console.log(ch + " is alphabet");
    else
        console.log(ch + " is not alphabet");
}

inputCharacter('a');
inputCharacter('K');
inputCharacter(5);
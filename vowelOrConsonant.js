// Write a JavaScript program to check whether an alphabet is vowel or consonant using if else. How to check vowels and consonants using if else in JavaScript programming. JavaScript Program to input a character from user and check whether it is vowel or consonant. Logic to check vowel or consonant in JavaScript programming.

// Example
// Input
// Input character: a
// Output

// 'a' is vowel

function inputCharacter(ch){
    if((ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') || (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'))
        console.log(ch + " is vowel");
    else
        console.log(ch + " is consonant");
}

inputCharacter('a');
inputCharacter('I');
inputCharacter('F');
inputCharacter('g');
inputCharacter('u');
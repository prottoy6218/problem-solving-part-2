// Write a C program to check whether a triangle is valid or not if angles are given using if else. How to check whether a triangle can be formed or not, if its angles are given using if else in C programming. Logic to check triangle validity if angles are given in C program.

// Example
// Input 
// Input first angle: 60
// Input second angle: 30
// Input third angle: 90
// Output

// The triangle is valid

function triangle(firstAngle, secondAngle, thirdAngle){
    const sum = firstAngle + secondAngle + thirdAngle;
    if(sum == 180 && firstAngle > 0 && secondAngle > 0 && thirdAngle > 0)
        console.log("The triangle is valid");
    else
        console.log("The triangle is not valid");
}

triangle(60, 30, 90);
triangle(60, 50, 90);
// Write a Javascript program to input side of a triangle and check whether triangle is valid or not using if else. How to check whether a triangle can be formed or not if sides of triangle is given using if else in Javascript programming. Logic to check triangle validity if sides are given in Javascript program.

// Example
// Input
// Input first side: 7
// Input second side: 10
// Input third side: 5
// Output

// Triangle is valid

function triangle(firstAngle, secondAngle, thirdAngle){
    if((firstAngle + secondAngle) > thirdAngle && (firstAngle + thirdAngle) > secondAngle && (secondAngle + thirdAngle) > firstAngle)
        console.log("Triangle is valid");

    else
        console.log("Triangle is not valid");
}

triangle(7, 10, 5);
triangle(-5, 10, 6);
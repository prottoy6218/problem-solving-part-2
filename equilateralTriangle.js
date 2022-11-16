// Write a Javascript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else. How to check whether a triangle is equilateral, scalene or isosceles triangle in Javascript programming. Logic to classify triangles as equilateral, scalene or isosceles triangle if sides are given in Javascript program.

// Example
// Input
// Input first side: 30
// Input second side: 30
// Input third side: 30
// Output

// Triangle is equilateral triangle

function triangle(firstAngle, secondAngle, thirdAngle){
    if(firstAngle === secondAngle &&  secondAngle === thirdAngle){
        console.log('Triangle is equilateral triangle');
    }
    else if(firstAngle === secondAngle || firstAngle === thirdAngle || secondAngle === thirdAngle){
        console.log('Isosceles triangle.');
    }
    else
        console.log("Scalene triangle.");

}

triangle(30, 30, 30);
triangle(60, 30, 60);
triangle(30, 40, 50);
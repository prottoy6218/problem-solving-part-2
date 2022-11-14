// Write a program to check positive, negative or zero using simple if or if else.
// Example
// Input
// Input number: 23
// Output

// 23 is positive

function inputNumber(num){
    if(0 < num)
        console.log(num + " is positive");
    else if(0 > num)
        console.log(num + " is negative");
    else
        console.log(num + " is zero");
}

inputNumber(23);
inputNumber(-25);
inputNumber(0);
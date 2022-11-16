// Write a JavaScript program to input amount from user and print minimum number of notes (Rs. 500, 100, 50, 20, 10, 5, 2, 1) required for the amount. How to the minimum number of notes required for the given amount in JavaScript programming. Program to find minimum number of notes required for the given denomination. Logic to find minimum number of denomination for a given amount in JavaScript program.

// Example
// Input
// Input amount: 575
// Output

// Total number of notes: 
// 500: 1
// 100: 0
// 50: 1
// 20: 1
// 10: 0
// 5: 1
// 2: 0
// 1: 0

function inputBalance(totalAmount){
    let amount500, amount100, amount50, amount20, amount10, amount5, amount2, amount1;
        amount500 = amount100 = amount50 = amount20 = amount10 = amount5 = amount2 = amount1 = 0; 
    if(totalAmount >= 500){
        amount500 = totalAmount / 500;
        totalAmount -= amount500 * 500; 
    }
    
    else if(totalAmount >= 100){
        amount100 = totalAmount / 100;
        totalAmount -= amount100 * 100  
    }
    else if(totalAmount >= 50){
        amount50 = totalAmount / 50;
        totalAmount -= amount50 * 50;
    }
    else if(totalAmount >= 20){
        amount20 = totalAmount / 20;
        totalAmount -= amount20 * 20;
    }
    console.log(parseInt(amount500));
    console.log(parseInt(amount100));
    console.log(parseInt(amount50));
    console.log(parseInt(amount20));
}

 inputBalance(1075);

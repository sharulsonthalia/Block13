// request a number (as a string)
const input1 = prompt(`Enter the first number:`);

//convert the string into a number
const num1 = Number(input1);

//request another number
const input2 = prompt(`Enter the second number:`);

//convert the string into a number

const num2 = Number(input2);

//add the two numbers together 
const sum = num1 + num2; 

//if the sum is less than -1000, print the number and state that it is less than -1000
if (sum< -1000){
    console.log(`${sum} is less than -1000`);
}

//if the sum is greater than 100, print the number and state that it is greater than 100
else if (sum > 100){
    console.log(`${sum} is greater than 100`);
}

//if the sum is 0, print the number and state that it is 0
else if (sum === 0){
    console.log(`${sum} is equal to 0`);
}

//if the sum is greater than 0, print the number and state that it is greater than 0
else if (sum > 0){
    console.log(`${sum} is larger than 0`);
}

//if the sum is less than 0, print the number and state that it is less than 0
else if (sum < 0){
    console.log(`${sum} is a negative number`);
}


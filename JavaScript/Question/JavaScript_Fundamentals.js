// Question 1
// let name = 'Rohan';
// let age = 28;
// console.log(`Hello ${name}, you are ${age} years old.`)
// const currentYear = new Date().getFullYear();
// console.log(`You born in year ${currentYear-age}.`);


// Question 2
// function isEven(num) {
//   return (num%2==0) ? true : false;
// }
// let arr = [1,2,3,4,5];
// for(let i=0; i<arr.length; i++) {
//   if(isEven(arr[i])) {
//     console.log(`${arr[i]} is even number.`);
//   } else {
//     console.log(`${arr[i]} is odd number.`);
//   }
// }


// Question 3
// function isPositive(num) {
//   return (num%2==0) ? true : false;
// }
// let arr = [1,-2,0,4,-5];
// for(let i=0; i<arr.length; i++) {
//   if(arr[i] == 0) {
//     console.log(`${arr[i]} is zero.`);
//   } else if(isPositive(arr[i])) {
//     console.log(`${arr[i]} is Positive number.`);
//   } else {
//     console.log(`${arr[i]} is negative number.`);
//   }
// }


// Question 4
// function findLargest(num1, num2, num3) {
//   if(num1>num2 && num1>num3) {
//     return num1;
//   } else if(num2>num1 && num2>num3) {
//     return num2;
//   } return num3;
// }
// let num1=10, num2=12, num3=15;
// console.log(`The largest number is ${findLargest(num1,num2,num3)}`);


// Question 5
// function calculate(num1, num2, operator) {
//   if(operator == '+') {
//     return num1 + num2;
//   } else if(operator == '-') {
//     return num1 - num2;
//   } else if(operator == '*') {
//     return num1 * num2;
//   } else if(operator == '/') {
//     return num1 / num2;
//   } else {
//     return num1 % num2;
//   }
// }
// console.log(calculate(4,2,'+'));
// console.log(calculate(4,2,'-'));
// console.log(calculate(4,2,'*'));
// console.log(calculate(4,2,'/'));
// console.log(calculate(4,2,'%'));


// Question 6
// function checkGrade(marks) {
//   if(marks>=90) {
//     return 'A';
//   } else if(marks>=80 && marks<90) {
//     return 'B';
//   } else if(marks>=70 && marks<80) {
//     return 'C';
//   } else if(marks>=60 && marks<70) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }
// let num = 96;
// console.log(`The grade for ${num} marks is : ${checkGrade(num)}`);


// Question 7
// let celsius = prompt("Enter the tempreature in celsius");
// console.log(`Tempreature in farenheit is ${9/5*celsius+32}`);


// Question 8 ***********************************************
// const randomNumber = Math.floor((Math.random()*100))+1;
// let guess;
// do {
//   guess = parseInt(prompt("Guess a number between 1 and 100:"), 10);
//   if (guess > randomNumber) {
//     alert("Too high!");
//   } else if (guess < randomNumber) {
//     alert("Too low!");
//   } else {
//     alert("Correct! 🎉 The number was " + randomNumber);
//   }
// } while(guess != randomNumber);


// Question 9
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


// Question 10
// function printTable(number) {
//   for(let i=1; i<=10; i++) {
//     console.log(`${number} * ${i} = ${number*i}`);
//   }
// }
// let number = 4;
// printTable(number);